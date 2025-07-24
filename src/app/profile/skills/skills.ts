import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-skills',
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {

}
