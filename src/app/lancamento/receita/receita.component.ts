import { LancamentosService } from './../../shared/services/lancamentos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit {

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
