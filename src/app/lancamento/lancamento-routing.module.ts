import { AutenticadorGuard } from './../shared/security/autenticador-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesaComponent } from './despesa/despesa.component';
import { ReceitaComponent } from './receita/receita.component';

const routes: Routes = [
  {path: 'despesa', component: DespesaComponent},
  {path: 'receita', component: ReceitaComponent, canActivate: [AutenticadorGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
