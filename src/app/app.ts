import { Component, signal } from '@angular/core';
import { Container } from './componentes/container/container';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Separator } from './componentes/separator/separator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Container, Header, Separator],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly alfabeto: string = ' A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
}
