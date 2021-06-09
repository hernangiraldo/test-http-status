import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler-service';
import { HttpStatusService } from '../http-status/http-status-service';
import { HttpParams } from '../http/http-service';

@Injectable()
export class ErrorHandlerImplService extends ErrorHandlerService {

  constructor(
    private httpStatus: HttpStatusService
  ) {
    super();
  }

  handle(err: any, params: HttpParams) {
    this.httpStatus.change(params.service, 'error', err);
    /**
     * TODO: lo que se necesite para manejar el error
     */
  }
}
