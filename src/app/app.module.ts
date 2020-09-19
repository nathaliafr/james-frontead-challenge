import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {EstabelecimentoComponent} from './estabelecimento/estabelecimento.component';
import {EstabelecimentosComponent} from './estabelecimentos/estabelecimentos.component';
import {AngularComponent } from './angular/angular.component';
import {CardModule} from 'primeng/card';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    EstabelecimentosComponent,
    EstabelecimentoComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    RouterModule.forRoot([
      {path: '', component: AngularComponent},
      {path: 'estabelecimento', component: EstabelecimentoComponent},
      {path: 'estabelecimentos', component: EstabelecimentosComponent},
      {path: '', redirectTo: '/estabelecimento', pathMatch: 'full'},
    ]),
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
