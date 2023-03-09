import { Router } from '@angular/router';
import { ILancamento } from './../../shared/models/lancamento.interface';
import { IDespesa } from './../../shared/models/despesa.interface';
import { LancamentosService } from './../../shared/services/lancamentos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  formulario!: FormGroup;
  dataSource: IDespesa[] = [];
  displayedColumns = ['data','valor','tipo','fixo','descricao','acoes'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private menuService: MenuService,
    private lancamentosService: LancamentosService
  ) { }

  ngOnInit(): void {
    this.menuService.ondeEstou = MenuTypeEnum.RELATORIO_DESPESA;
    this.inicializaFormulario();
    this.carregarLista();
  }

  private inicializaFormulario(): void {
    this.formulario = this.fb.group({
      data: ['', Validators.required]
    });
  }

  private carregarLista(): void {
    this.lancamentosService.listaLancamentos().subscribe({
      next: (resp) => {
        if (resp.body) {
          // lista de lancamentos
          const data = resp.body;
          // filtrar as despesas
          const lista = data.filter((lanc) => lanc.ehReceita === false);
          this.dataSource = lista.map((lanc) => this.lancamentoToDespesa(lanc));
        }
      }
    });
  }

  private lancamentoToDespesa(lancamento: ILancamento): IDespesa {
    const despesa: IDespesa = {
      data: lancamento.data,
      descricao: lancamento.descricao,
      ehFixo: lancamento.ehFixo,
      tipo: lancamento.tipo,
      valor: lancamento.valor,
      id: lancamento.id
    };
    return despesa;
  }

  /**
   * Calcular o total das das despesas
   * @returns valor total do somatorio
   */
  getTotalCost() {
    return this.dataSource.map(t => t.valor).reduce((acc, value) => acc + value, 0);
  }

  onEditar(despesa: IDespesa): void {
    this.lancamentosService.despesaSelecionada = despesa;
    this.lancamentosService.modoEdicao = true;
    this.router.navigate(['lancamentos/despesa']);
  }

}
