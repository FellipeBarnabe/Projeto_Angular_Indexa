import { Component, signal } from '@angular/core';
import { Container } from './componentes/container/container';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Separator } from './componentes/separator/separator';
import { Contact } from './componentes/contact/contact';
import { FormsModule } from '@angular/forms';

interface contato {
  id: number;
  nome: string;
  telefone: string;
}

import agenda from './agenda.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Container, Header, Separator, Contact, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly alfabeto: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  contatos: contato[] = agenda;

  filtroPorTexto: string = '';

  filtrarContatoPorLetraInicial(letra: string): contato[] {
    return this.contatos.filter((Contato) => {
      const nome = Contato.nome.toLowerCase();
      return (
        nome.startsWith(letra.toLowerCase()) && nome.includes(this.filtroPorTexto.toLowerCase())
      );
    });
  }
}
