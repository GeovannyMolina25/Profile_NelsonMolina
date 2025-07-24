import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class ProjectComponent {
projects = [
    {
      name: 'Proyecto Uno',
      year: 2023,
      desc: 'Descripción breve del proyecto uno.'
    },
    {
      name: 'Proyecto Dos',
      year: 2024,
      desc: 'Descripción breve del proyecto dos.'
    }
    
  ];
}
