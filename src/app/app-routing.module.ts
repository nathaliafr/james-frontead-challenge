import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AngularComponent} from './angular/angular.component';
import {EstabelecimentoComponent} from './estabelecimento/estabelecimento.component';
import {EstabelecimentosComponent} from './estabelecimentos/estabelecimentos.component';

const appRoutes: Routes =[
  {path: '', component: AngularComponent},
  {path: 'estabelecimento', component: EstabelecimentoComponent},
  {path: 'estabelecimentos', component: EstabelecimentosComponent},
  {path: '', redirectTo: '/estabelecimento', pathMatch: 'full'},
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
