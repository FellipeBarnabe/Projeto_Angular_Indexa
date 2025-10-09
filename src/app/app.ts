import { Component, signal } from '@angular/core';
import { Container } from './componentes/container/container';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Container, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'indexa';
}
