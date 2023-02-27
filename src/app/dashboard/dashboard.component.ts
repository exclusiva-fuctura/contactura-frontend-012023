import { IDespesa } from './../shared/modules/despesa.interface';
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

  constructor() { }

  ngOnInit(): void {
  }

}
