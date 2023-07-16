import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const token = localStorage.getItem('token');

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    // send cloned request with header to the next handler.
    return next.handle(req);
  }
}
