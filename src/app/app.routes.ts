import { Routes } from '@angular/router';
import { Signin } from './pages/signin/signin';
import { Home } from './pages/home/home';
import { Layout } from './components/layout/layout';
import { authGuard } from './guards/auth-guard';


export const routes: Routes = [
   // 🔓 rota pública
  { path: 'signin', component: Signin },

  // 🔒 rotas protegidas (filhas do Layout)
  {
    path: '',
    component: Layout,
    canActivateChild: [authGuard], // ✅ protege todas as rotas filhas
    children: [
      { path: 'home', component: Home },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },

  // Redireciona qualquer outro path para signin
  { path: '**', redirectTo: 'signin', pathMatch: 'full' }
];
