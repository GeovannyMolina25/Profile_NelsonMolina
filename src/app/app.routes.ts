import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile';



export const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'home', component: ProfileComponent }
];
