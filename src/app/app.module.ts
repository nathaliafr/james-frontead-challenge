import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {EstabelecimentoComponent} from './estabelecimento/estabelecimento.component';
import {EstabelecimentosComponent} from './estabelecimentos/estabelecimentos.component';
import {AngularComponent } from './angular/angular.component';
import {CardModule} from 'primeng/card';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';


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
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
