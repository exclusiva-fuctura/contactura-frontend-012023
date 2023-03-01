import { AppSettings } from './../../app.settings';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILogin } from './../modules/login.intetrface';
import { DaoService } from './dao.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {

  constructor(
    private dao: DaoService
  ) { }

  /**
   * Autentica o usuario
   * @param login dados do usuario no login
   * @returns token no header e login no payload
   */
  autenticar(login: ILogin): Observable<HttpResponse<ILogin>> {
    return this.dao.post<ILogin>(AppSettings.API_AUTENTICADOR, login, DaoService.MEDIA_TYPE_APP_JSON);
  }
}
