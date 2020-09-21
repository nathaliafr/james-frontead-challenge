import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estabelecimento } from '../estabelecimento';
import { EstabelecimentosService } from '../service/estabelecimentos.service';

interface TipoConta {
  value: string;
  viewValue: string;
}
interface SaqueAutomatico {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit {
  id: string;
  estabelecimentos: Array<Estabelecimento> = [];
  estabelecimento: Estabelecimento;
  mensagem: string;
  nome: string;
  tipoContas: TipoConta[] = [
    {value: 'conta-corrente', viewValue: 'Conta Corrente'},
    {value: 'poupanca ', viewValue: 'Poupança '},
    {value: 'conta-salario ', viewValue: 'Conta Salário '},
  ];
  saquesAutomatico: SaqueAutomatico[] = [
    {value: 'sim', viewValue: 'Sim'},
    {value: 'nao', viewValue: 'Não'}
  ];

  constructor(private estabelecimentosService: EstabelecimentosService,
              private route: ActivatedRoute,
              private router: Router,
              ) {
    this.route.queryParams.subscribe(params => {
      this.id = params[`id`];

      this.estabelecimento = estabelecimentosService.findById(this.id);
      this.nome = this.estabelecimento.name;
    });
  }

  ngOnInit(): void {
  }

  /**
   * Salva uma edição de estabelecimento
   */
  salvar() {
    console.log('texto');
    if (this.validar()){
      this.estabelecimentosService.editar(this.estabelecimento);
      this.router.navigate(['/estabelecimentos']);
    }
  }

  validar(): boolean{

    const conta = Number.parseInt(this.estabelecimento.account, 10);
    const agencia = Number.parseInt(this.estabelecimento.agency, 10);
    const cpf = Number.parseInt(this.estabelecimento.document, 10);
    if (this.estabelecimento.name == null || this.estabelecimento.name === '' ) {
      this.mensagem = 'Nome do estabelecimento é obrigatório';
      return false;
    }
    if ((this.estabelecimento.document === '' || this.estabelecimento.document === undefined) &&
      (this.estabelecimento.account === '' || this.estabelecimento.account === undefined) &&
      (this.estabelecimento.agency === undefined || this.estabelecimento.agency === '')){
      return true;
    }
    if ((Number.isInteger(conta) === false || Number.isNaN(conta) === true )
        && (Number.isInteger(agencia) === false || Number.isNaN(agencia) === true)
        && (Number.isInteger(cpf) === false || Number.isNaN(cpf) === true )) {
        this.mensagem = 'Campo aceita apenas números';
        return false;
    }else {
      return true;
    }
  }

}
