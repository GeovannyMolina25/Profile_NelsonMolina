import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviarMensaje() {
    console.log('Formulario enviado');
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Mensaje:', this.mensaje);
    alert('Mensaje enviado (simulado)');
    
  }
}