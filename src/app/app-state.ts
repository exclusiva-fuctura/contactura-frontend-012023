import { IReceita } from './shared/modules/receita.interface';
import { IDespesa } from './shared/modules/despesa.interface';
import { OperacaoTypeEnum } from './shared/enums/operacao-type.enum';

export class AppState {
  token = '';
  operacao = OperacaoTypeEnum.SALVAR;

  // lancamentos selecionados
  despesaSelecionada!: IDespesa;
  receitaSelecionada!: IReceita;
}
