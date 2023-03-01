import { MenuTypeEnum } from './../../shared/enums/menu-type.enum';
import { MenuService } from './../../shared/services/menu.service';
import { IDespesa } from './../../shared/modules/despesa.interface';
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

}
