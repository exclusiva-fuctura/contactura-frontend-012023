import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { HttpClientModule } from '@angular/common/http';
// services
import { DaoService } from './services/dao.service';
import { MenuService } from './services/menu.service';
import { UsuarioService } from './services/usuario.service';
import { AutenticadorService } from './services/autenticador.service';
import { LancamentosService } from './services/lancamentos.service';
// components
import { MenuComponent } from './components/menu/menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoadingComponent } from './components/loading/loading.component';
// directives
import { MaiusculoDirective } from './directives/maiusculo.directive';
import { DinheiroDirective } from './directives/dinheiro.directive';

const elements = [
  MenuComponent,
  LogoutComponent,
  LoadingComponent,
  MaiusculoDirective,
  DinheiroDirective
];

@NgModule({
  declarations: [
    elements
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    elements
  ],
  providers: [
    DaoService,
    MenuService,
    UsuarioService,
    LancamentosService,
    AutenticadorService,
  ]
})
export class SharedModule { }
