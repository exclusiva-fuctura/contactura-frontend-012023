import { Component, OnInit } from '@angular/core';

import { LancamentosService } from './../../shared/services/lancamentos.service';

@Component({
  selector: 'app-despesa',
  templateUrl: './despesa.component.html',
  styleUrls: ['./despesa.component.css']
})
export class DespesaComponent implements OnInit {

  constructor(
    private lancamentosService: LancamentosService
  ) { }

  ngOnInit(): void {
  }

  get buttonLabel(): string {
    return this.lancamentosService.modoEdicao ? 'Editar' : 'Salvar';
  }

  get tipos(): string[] {
    return [];
  }

}
