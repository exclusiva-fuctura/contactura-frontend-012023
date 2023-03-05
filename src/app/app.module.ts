import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// provider
import { AppState } from './app-state';
import { AutenticadorGuard } from './shared/security/autenticador-guard';
// module
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
// component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DespesaComponent } from './relatorio/despesa/despesa.component';
import { ReceitaComponent } from './relatorio/receita/receita.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DespesaComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ReceitaComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    AppState,
    AutenticadorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
