import { OperacaoTypeEnum } from './../enums/operacao-type.enum';
import { AppState } from './../../app-state';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  constructor(
    private state: AppState
  ) { }

  get modoEdicao(): boolean {
    return this.state.operacao === OperacaoTypeEnum.EDITAR;
  }

  set modoEdicao(ehEdicao: boolean) {
    if (ehEdicao) {
      this.state.operacao = OperacaoTypeEnum.EDITAR;
    } else {
      this.state.operacao = OperacaoTypeEnum.SALVAR;
    }
  }
}
