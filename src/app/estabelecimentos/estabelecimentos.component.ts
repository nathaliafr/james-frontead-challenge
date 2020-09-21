import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../estabelecimento';
import { Router } from '@angular/router';
import { EstabelecimentosService } from '../service/estabelecimentos.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-estabelecimentos',
  templateUrl: './estabelecimentos.component.html',
  styleUrls: ['./estabelecimentos.component.css']
})
export class EstabelecimentosComponent implements OnInit {

  estabelecimentos: Array<Estabelecimento> = [];
  constructor(
    @Inject(EstabelecimentosService) private estabelecimentosService: EstabelecimentosService,
    private router: Router,
  ) {
     this.getEstabelecimento();
  }

  ngOnInit(): void {
  }
  /**
   * Recupera todos os estabeleciemtos que estão salvos
   */
  getEstabelecimento() {
     this.estabelecimentos = this.estabelecimentosService.getEstabelecimentos();
  }

/**
 * Direciona a pagina para o componente de editar estabelecimento
 * @param estabelecimento
 */
  editarFormulario(estabelecimento) {
     this.router.navigate(['/estabelecimento'], {
      queryParams: {
        id: estabelecimento.id
      }
    });
  }
}
