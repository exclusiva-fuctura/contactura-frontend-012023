import { MenuTypeEnum } from './../../shared/enums/menu-type.enum';
import { MenuService } from './../../shared/services/menu.service';
import { IReceita } from '../../shared/models/receita.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  dataSource: IReceita[] = [];
  displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.ondeEstou = MenuTypeEnum.RELATORIO_DESPESA;
  }

  /**
   * Calcular o total das das despesas
   * @returns valor total do somatorio
   */
  getTotalCost() {
    return this.dataSource.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

}
