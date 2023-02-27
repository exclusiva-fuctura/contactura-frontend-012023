import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { DespesaComponent } from './despesa/despesa.component';
import { ReceitaComponent } from './receita/receita.component';


@NgModule({
  declarations: [
    DespesaComponent,
    ReceitaComponent
  ],
  imports: [
    CommonModule,
    LancamentoRoutingModule
  ]
})
export class LancamentoModule { }