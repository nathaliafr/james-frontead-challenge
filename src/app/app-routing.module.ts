import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EstabelecimentoComponent} from './estabelecimento/estabelecimento.component';
import {EstabelecimentosComponent} from './estabelecimentos/estabelecimentos.component';

const appRoutes: Routes = [
  {path: 'estabelecimentos', component: EstabelecimentosComponent},
  {path: 'estabelecimento', component: EstabelecimentoComponent},
  {path: '', redirectTo: '/estabelecimentos', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
