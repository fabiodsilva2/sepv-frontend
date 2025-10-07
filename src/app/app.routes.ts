import { Routes } from '@angular/router';
import { Signin } from './pages/signin/signin';
import { Home } from './pages/home/home';


export const routes: Routes = [
  { path: 'signin', component: Signin },
  { path: 'home', component: Home }, // 👈 nova rota para o componente Home
  { path: '', redirectTo: 'signin', pathMatch: 'full' }
];
