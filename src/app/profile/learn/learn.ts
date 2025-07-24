import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-learn',
  imports: [CommonModule],
  templateUrl: './learn.html',
  styleUrl: './learn.css'
})
export class LearnComponent {

  technologies = {
    backend: ['C#', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Node.js', 'PHP'],
    frontend: ['CSS', 'Sass', 'Bootstrap 5', 'Angular Material'],
    frameworks: ['React', 'Angular', 'Django', 'Laravel'],
    tools: ['Jira', 'GitHub', 'Docker'],
    databases: ['Microsoft SQL Server', 'PostgreSQL']
  };
}
