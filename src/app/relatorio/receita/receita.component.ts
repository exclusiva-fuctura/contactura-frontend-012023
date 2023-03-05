import { MenuTypeEnum } from './../../shared/enums/menu-type.enum';
import { MenuService } from './../../shared/services/menu.service';
import { IDespesa } from '../../shared/models/despesa.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

  dataSource: IDespesa[] = [];
  displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    this.menuService.ondeEstou = MenuTypeEnum.RELATORIO_RECEITA;
  }

    /**
   * Calcular o total das das despesas
   * @returns valor total do somatorio
   */
    getTotalCost() {
      return this.dataSource.map(t => t.valor).reduce((acc, value) => acc + value, 0);
    }
}
