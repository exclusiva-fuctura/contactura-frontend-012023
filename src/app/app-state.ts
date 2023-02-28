import { OperacaoTypeEnum } from './shared/enums/operacao-type.enum';

export class AppState {
  token = '';

  operacao = OperacaoTypeEnum.SALVAR;
}
