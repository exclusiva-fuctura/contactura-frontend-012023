import { MaterialModule } from './../material/material.module';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioService } from './services/usuario.service';
import { MenuService } from './services/menu.service';
import { AutenticadorService } from './services/autenticador.service';
import { LancamentosService } from './services/lancamentos.service';
import { DaoService } from './services/dao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { LogoutComponent } from './components/logout/logout.component';



@NgModule({
  declarations: [
    MenuComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
    LogoutComponent
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
