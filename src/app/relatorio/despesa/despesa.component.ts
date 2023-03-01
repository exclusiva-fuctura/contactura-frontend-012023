import { MenuTypeEnum } from './../../shared/enums/menu-type.enum';
import { MenuService } from './../../shared/services/menu.service';
import { IReceita } from './../../shared/modules/receita.interface';
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

}
