import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent } from './contact/contact';
import { LearnComponent } from './learn/learn';
import { ProjectComponent } from './project/project';
import { EducationComponent } from './education/education';
import { SkillsComponent } from './skills/skills';
import { HeaderComponent } from '../components/header/header';
import { FooterComponent } from '../components/footer/footer';


@Component({
  selector: 'app-profile',
  standalone: true, 
  imports: [CommonModule, ContactComponent, LearnComponent, ProjectComponent, EducationComponent, SkillsComponent,HeaderComponent, FooterComponent],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {
  name = 'Nelson Molina';
  title = 'Desarrollador Full Stack';
  about = 'Apasionado por la tecnología y el desarrollo de software.';

  linkedinUrl = 'https://linkedin.com/in/nelsonmolina';
  githubUrl = 'https://github.com/nelsonmolina';

  technologies = {
    backend: ['C#', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Node.js', 'PHP'],
    frontend: ['CSS', 'Sass', 'Bootstrap 5', 'Angular Material'],
    frameworks: ['React', 'Angular', 'Django', 'Laravel'],
    tools: ['Jira', 'GitHub', 'Docker'],
    databases: ['Microsoft SQL Server', 'PostgreSQL']
  };
}

