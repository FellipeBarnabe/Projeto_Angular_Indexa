import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Container } from '../../componentes/container/container';
import { Separator } from '../../componentes/separator/separator';

@Component({
  selector: 'app-formulario-contato',
  imports: [CommonModule, Container, Separator],
  templateUrl: './formulario-contato.html',
  styleUrl: './formulario-contato.css',
})
export class FormularioContato {}
