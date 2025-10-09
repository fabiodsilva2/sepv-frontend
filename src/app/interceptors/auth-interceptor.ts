import { HttpInterceptorFn } from '@angular/common/http';
import { Auth } from '../service/auth';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(Auth);
  //authService.isLoggedIn();

  const authToken = authService.getToken();

  if (authToken) {
    const cloned = req.clone({
      setHeaders: {
        authorization: "Bearer " + authToken,
      },
    });
    return next(cloned);
  }

    return next(req);

};
