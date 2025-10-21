import { Component, signal } from '@angular/core';
import { Container } from './componentes/container/container';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Separator } from './componentes/separator/separator';
import { Contact } from './componentes/contact/contact';

interface contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Container, Header, Separator, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly alfabeto: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  contatos: contato[] = agenda;

  filtrarContatoPorLetraInicial(letra: string): contato[] {
    return this.contatos.filter((Contato) => {
      return Contato.nome.toLowerCase().startsWith(letra.toLowerCase());
    });
  }
}
