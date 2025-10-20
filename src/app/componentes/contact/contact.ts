import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  @Input() nome: string = '';
  @Input() telefone: string = '';
}
