import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit {
  nombre = '';
  email = '';
  mensaje = '';

  fullText = `Soy Ingeniero en Software Junior y sería un gusto trabajar con ustedes. 
  Me puedes contactar a este número: +593 998 628 996. Desarrollador de software.`;

  currentIndex = 0;
  typedText = '';

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    if (this.currentIndex < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.currentIndex);
      this.currentIndex++;
      setTimeout(() => this.typeWriter(), 50);
    }
  }

  ngAfterViewInit() {
  const text = "Desarrollador de Software";
  const target = document.getElementById("typed-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      target!.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
}
  enviarMensaje() {
  if (!this.nombre || !this.email || !this.mensaje) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const templateParams = {
    from_name: this.nombre,
    from_email: this.email,
    message: this.mensaje,
  };

  emailjs
    .send(
      'TU_SERVICE_ID',
      'TU_TEMPLATE_ID',
      templateParams,
      'TU_USER_ID' // API public key
    )
    .then(
      (response) => {
        alert('¡Mensaje enviado con éxito!');
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
      },
      (error) => {
        alert('Error al enviar el mensaje, inténtalo nuevamente.');
        console.error(error);
      }
    );
}
}