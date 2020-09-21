import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estabelecimento } from '../estabelecimento';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {

  constructor(private http: HttpClient) {
  }


  getEstabelecimentosApi(): Observable<Estabelecimento[]> {
    return this.http.get<Estabelecimento[]>(environment.apiUrl);
  }
  /**
   * Verifica se existe uma lista de estabelecimento na memoria e caso nao existe é feito um http GET para a api de dados,
   * Apos isso é criado um localstorege
   */
  getEstabelecimentos() {


    const dado = this.getData('estabelecimentos');
    if (!dado) {
      this.getEstabelecimentosApi().subscribe(estabelecimentos => {
        for (let i = 0; i < estabelecimentos.length; i++) {
          estabelecimentos[i].city = this.getEndereco(estabelecimentos[i].address);
        }
        this.setData('estabelecimentos', estabelecimentos);
        return estabelecimentos;
      });
    } else {
      return dado;
    }
  }
  /**
   * Retira o nome da cidade do endereço completo
   * @param enderecoCompleto
   */
  getEndereco(enderecoCompleto: any) {
    const endereco = enderecoCompleto.split(',');
    return endereco[1];
  }

  /**
   * Busca um estabelecimento pelo o id
   * @param id
   */
  findById(id) {
    const estabelecimentos = this.getData('estabelecimentos');
    return estabelecimentos.find((estabelecimento: Estabelecimento) => estabelecimento.id === id);
  }

  /**
   * Edita um estabelecimento, buscando pelo o id
   * @param estabnelecimento
   */
  editar(estabelecimento) {
    const estabelecimentos = this.getData('estabelecimentos');
    for (let i = 0; i < estabelecimentos.length; i++) {

      if (estabelecimentos[i].id === estabelecimento.id) {
        estabelecimentos[i] = estabelecimento;
        this.setData('estabelecimentos', estabelecimentos);
        break;
      }

    }
  }
  /**
   * Recupera uma variavel salva na memoria local
   * @param key
   */
  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * Cria/edita uma variavel logal
   * @param key
   * @param data
   */
  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
