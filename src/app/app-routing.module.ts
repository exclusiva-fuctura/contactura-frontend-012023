import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './login/login.component';
import { ReceitaComponent } from './relatorio/receita/receita.component';
import { DespesaComponent } from './relatorio/despesa/despesa.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Security
import { AutenticadorGuard } from './shared/security/autenticador-guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'relatorio-despesa', component: DespesaComponent},
  {path: 'relatorio-receita', component: ReceitaComponent},
  {path: 'lancamentos', loadChildren: () => import('./lancamento/lancamento.module').then(m => m.LancamentoModule)},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
