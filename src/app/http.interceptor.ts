import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const requestWithAuthorization = req.clone({
    headers: req.headers
      .set('Access-Control-Allow-Origin', '*'),
  });
  return next(requestWithAuthorization);
};
