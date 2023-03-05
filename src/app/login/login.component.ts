import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from './../shared/services/usuario.service';
import { ILogin } from './../shared/models/login.interface';
import { AutenticadorService } from './../shared/services/autenticador.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;
  showLoading = false;

  constructor(
    private route: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private autenticadorService: AutenticadorService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  private autenticar(login: ILogin): void {
    this.autenticadorService.autenticar(login).subscribe({
      next: (resposta) => {
        if (resposta.status === HttpStatusCode.Created) {
          this.usuarioService.token = resposta.headers.get('authorization');
          this.route.navigate(['dashboard']);
        }
      },
      error: (err) => {
        Swal.fire(
          'ALERTA: Realizar Login',
          err.error.mensagem,
          'warning'
          );
        this.showLoading = false;
      }
    });
  }

  onClick(): void {
    this.showLoading = true;
    const login: ILogin = this.formulario.value;
    this.autenticar(login);
  }

  onCadastro(): void {
    this.route.navigate(['cadastro']);
  }
}
