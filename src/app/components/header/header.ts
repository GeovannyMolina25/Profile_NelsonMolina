import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-header',
  imports: [FormsModule, MatSlideToggleModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
isChecked = false;

  toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
      menu.classList.toggle('show');
    }
  }
}
