import { Routes } from '@angular/router';
import { Signin } from './pages/signin/signin';


export const routes: Routes = [
  { path: 'signin', component: Signin },
  { path: '', redirectTo: 'signin', pathMatch: 'full' }
];
