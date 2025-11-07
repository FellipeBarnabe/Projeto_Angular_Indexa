import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Container } from '../../componentes/container/container';
import { Separator } from '../../componentes/separator/separator';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
      nome: new FormControl('fe'),
      telefone: new FormControl('23345'),
      email: new FormControl('asddads@gmail.com'),
      aniversario: new FormControl('17/10/1989'),
      redes: new FormControl('facebook'),
      observacoes: new FormControl('Eu sou...'),
    });
  }
  salvarContato() {
    console.log(this.contatoForm.value);
  }
  cancelar() {
    console.log('submissão cancelada');
  }
}
