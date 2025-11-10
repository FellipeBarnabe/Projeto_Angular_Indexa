import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Container } from '../../componentes/container/container';
import { Separator } from '../../componentes/separator/separator';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

export function dataFuturaValidator(control: AbstractControl): ValidationErrors | null {
  const valor = control.value;
  if (!valor) return null;
  const data = new Date(valor);
  const hoje = new Date();
  return data > hoje ? { dataFutura: true } : null;
}

@Component({
  selector: 'app-formulario-contato',
  imports: [CommonModule, Container, Separator, ReactiveFormsModule],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato {
  contatoForm!: FormGroup;
  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl('', [Validators.required, dataFuturaValidator]),
      redes: new FormControl('', [Validators.required]),
      observacoes: new FormControl('', Validators.required),
    });
  }
  salvarContato() {
    if (this.contatoForm.valid) console.log(this.contatoForm.value);
  }
  cancelar() {
    console.log('submissão cancelada');
  }
}
