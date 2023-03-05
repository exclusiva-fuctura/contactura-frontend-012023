import { MenuTypeEnum } from './../shared/enums/menu-type.enum';
import { MenuService } from './../shared/services/menu.service';
import { IDespesa } from '../shared/models/despesa.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataSourceDespesas: IDespesa[] = [];
  dataSourceReceitas: IDespesa[] = [];
  displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit(): void {
    // notificar ao menu em qual componente estou
    this.menuService.ondeEstou = MenuTypeEnum.DASHBOARD;
  }

}
