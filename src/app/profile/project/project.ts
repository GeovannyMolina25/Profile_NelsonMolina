import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrls: ['./project.css']
})
export class ProjectComponent {
  projects = [
    {
      name: 'App Alarma',
      year: 2025,
      desc: 'Aplicación interactiva de alarmas motivacionales que impulsa a los usuarios a cumplir sus objetivos diarios mediante tareas personalizadas y contenido audiovisual inspirador.',
      tech: 'ASP.NET 8, Angular 19, SQL Server 2019',
      tools: 'GitHub, Docker, Notion',
      image: 'assets/alarma.jpg',
      link: 'https://github.com/GeovannyMolina25/app-alarma'
    },
    {
      name: 'App Tareas',
      year: 2025,
      desc: 'Plataforma de servicios tipo puja entre usuarios. Los usuarios pueden ofrecer servicios o solicitar tareas, con un sistema de subasta para seleccionar la mejor oferta.',
      tech: 'ASP.NET 8, Angular 19, SQL Server 2019',
      tools: 'GitHub, Jira, Notion',
      image: 'assets/tareas_gestor.png',
      link: 'https://github.com/GeovannyMolina25/app-tareas'
    },
    {
      name: 'Inventario de Materiales',
      year: 2024,
      desc: 'Sistema para gestionar el stock de una ferretería, con alertas automáticas de productos agotados y autenticación JWT para control de usuarios.',
      tech: 'JavaScript, React, PostgreSQL',
      tools: 'GitHub, Docker',
      image: 'assets/Invetario_materiales.png',
      link: 'https://github.com/GeovannyMolina25/inventario-materiales'
    },
    {
      name: 'Reidentificación de Personas',
      year: 2025,
      desc: 'Sistema de tesis que reidentifica personas usando características biométricas (rostro y voz) y soft-biométricas (textura, color, silueta). Probado en la Universidad ESPE con cámaras reales.',
      tech: 'Python, Django, YOLOv5',
      tools: 'GitHub, Notion',
      image: 'assets/reidentificacion.jpg',
      link: 'https://github.com/GeovannyMolina25/reidentificacion-personas'
    },
    {
      name: 'Edu-Ruleta',
      year: 2024,
      desc: 'Aplicación educativa tipo ruleta que permite a los estudiantes aprender mediante preguntas de diferentes categorías y registrar sus resultados con retroalimentación al profesor.',
      tech: 'Flutter, Firebase',
      tools: 'GitHub, Jira',
      image: 'assets/Eduruleta.jpeg',
      link: 'https://github.com/GeovannyMolina25/edu-ruleta'
    },
    {
      name: 'VitaAlimentos Limpieza',
      year: 2024,
      desc: 'Sistema para el registro de tareas de limpieza por áreas en empresas alimentarias. Incluye gestión por roles (admin, supervisor y operador) y trazabilidad por actividad.',
      tech: 'ASP.NET, Bootstrap 5, SQL Server',
      tools: 'GitHub, Docker, Jira',
      image: 'assets/gestor_actividades.png',
      link: 'https://github.com/GeovannyMolina25/vitaalimentos-limpieza'
    }
  ];

  showAll = false;

  get visibleProjects() {
    return this.showAll ? this.projects : this.projects.slice(0, 6);
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }
}
