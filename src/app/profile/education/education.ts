import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-education',
  imports: [CommonModule,MatCardModule,MatButtonModule, MatIconModule],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class EducationComponent {
  currentIndex = 0;

  educations = [
    {
      img: 'assets/Espe.jpg',
      title: 'Universidad de las Fuerzas Armadas ESPE',
      degree: 'Ingeniero en Software',
      description: `Estudié y participé en proyectos universitarios, incluyendo cursos como POO, programación web,
      redes, aplicaciones distribuidas, móviles, IA, estructuras de datos, arquitectura de computadores y software,
      gestión de proyectos y muchos más que fortalecieron mi formación académica. Obtuve el título de Ingeniero.`
    },
    {
      img: 'assets/JuanMontalvo.jpg',
      title: 'Colegio Experimental Juan Montalvo',
      degree: 'Bachiller en Ciencias',
      description: `Aquí obtuve mi título de bachiller en ciencias. Durante mi etapa escolar desarrollé habilidades analíticas y académicas
      fundamentales que me ayudaron en mi formación profesional.`
    },
    {
      img: 'assets/youtube.jpg',
      title: 'YouTube',
      degree: 'Aprendizaje autodidacta',
      description: `YouTube ha sido una herramienta fundamental para aprender sobre tecnología, lenguajes de programación, 
      diseño y nuevas herramientas de desarrollo, permitiéndome avanzar constantemente.`
    },
    {
      img: 'assets/Udemy.png',
      title: 'Udemy & DevTech',
      degree: 'Cursos en línea',
      description: `He tomado múltiples cursos en plataformas como Udemy y DevTech, reforzando temas avanzados como 
      backend con Spring Boot, desarrollo web y bases de datos.`
    },
    {
      img: 'assets/Micro.png',
      title: 'Documentación oficial (Microsoft, etc)',
      degree: 'Consulta profesional',
      description: `Leer documentación oficial ha sido parte clave en mi desarrollo como ingeniero, 
      permitiéndome entender y aplicar buenas prácticas en proyectos reales.`
    },
    {
      img: 'assets/Platzi.jpg',
      title: 'Platzi',
      degree: 'Formación continua',
      description: `En Platzi he desarrollado habilidades en desarrollo frontend y backend, marketing digital, 
      liderazgo y muchas otras competencias esenciales para mi carrera tecnológica.`
    }
  ];

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.educations.length;
  }

  prevCard() {
    this.currentIndex = (this.currentIndex - 1 + this.educations.length) % this.educations.length;
  }
}
