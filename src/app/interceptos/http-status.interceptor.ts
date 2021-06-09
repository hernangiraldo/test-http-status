import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { HttpStatusService } from '../services/http-status/http-status-service';

@Injectable()
export class HttpStatusInterceptor implements HttpInterceptor {

  constructor(
    private httpStatus: HttpStatusService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const service = request.headers.get('service') as string;
    request.headers.delete('service');

    this.httpStatus.change(service, 'loading');
    return next.handle(request)
      .pipe(
        delay(3000),
        map((response) => {
          this.httpStatus.change(service, 'success');
          return response;
        }),
        catchError(err => {
          this.httpStatus.change(service, 'error', 'NOOOOO!!! :(');
          return throwError(err);
        })
      );
  }
}
