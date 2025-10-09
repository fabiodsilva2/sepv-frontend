import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('currentUser');

  // 🔓 Libera acesso à página de login (signin)
  if (state.url.includes('/signin')) {
    return true;
  }

  // 🔒 Se existir token, libera acesso
  if (token) {
    return true;
  }

  // 🚫 Se não houver token, redireciona para /signin
  router.navigate(['/signin']);
  return false;
};
