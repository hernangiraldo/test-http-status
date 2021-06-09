import { HttpHeaders } from '@angular/common/http';

export interface HttpParams {
  path: string;
  service: string;
  isPublic?: boolean;
  headers?: HttpHeaders;
}

export class HttpGetParams implements HttpParams {
  constructor(
    public path: string,
    public service: string,
    public isPublic?: boolean,
    public headers?: HttpHeaders,
  ) { }
}

export class HttpPostParams implements HttpParams {
  constructor(
    public path: string,
    public service: string,
    public body: any,
    public isPublic?: boolean,
    public headers?: HttpHeaders,
  ) { }
}

export class HttpPutParams implements HttpParams {
  constructor(
    public path: string,
    public service: string,
    public body: any,
    public isPublic?: boolean,
    public headers?: HttpHeaders,
  ) { }
}

export class HttpDeleteParams implements HttpParams {
  constructor(
    public path: string,
    public service: string,
    public isPublic?: boolean,
    public headers?: HttpHeaders,
  ) {
  }
}

export abstract class HttpService {
  abstract get<T>(params: HttpGetParams): Promise<T>;
  abstract post<T>(params: HttpPostParams): Promise<T>;
  abstract put<T>(params: HttpPutParams): Promise<T>;
  abstract delete(params: HttpDeleteParams): Promise<unknown>;
}
