import { Routes } from '@angular/router';
import { Signin } from './pages/signin/signin';
import { Home } from './pages/home/home';
import { Layout } from './components/layout/layout';


export const routes: Routes = [
  { path: 'signin', component: Signin },

  // tudo que precisa de menu fica como filho do Layout
  {
    path: '',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'signin', pathMatch: 'full' }
];
