import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {
  HttpDeleteParams,
  HttpGetParams,
  HttpParams,
  HttpPostParams,
  HttpPutParams,
  HttpService
} from './http-service';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpImplService extends HttpService {

  #baseUrl: string;

  constructor(
    private readonly httpClient: HttpClient,
  ) {
    super();
    this.#baseUrl = environment.baseUrl;
  }

  private static buildHeaders(params: HttpParams): HttpHeaders {
    return new HttpHeaders({
      ...params.headers,
      service: params.service,
      ...(params.isPublic ? {
        /**
         * Se podrían agregar el clientId y el clientSecret
         */
      } : {})
    })
  }

  get<T>(params: HttpGetParams): Promise<T> {
    const headers = HttpImplService.buildHeaders(params);
    return this.httpClient.get<T>(`${ this.#baseUrl }${ params.path }`, { headers }).toPromise()
  }

  post<T>(params: HttpPostParams): Promise<T> {
    const headers = HttpImplService.buildHeaders(params);
    return this.httpClient.post<T>(`${ this.#baseUrl }${ params.path }`, params.body, { headers }).toPromise()
  }

  put<T>(params: HttpPutParams): Promise<T> {
    const headers = HttpImplService.buildHeaders(params);
    return this.httpClient.put<T>(`${ this.#baseUrl }${ params.path }`, params.body, { headers }).toPromise()
  }

  delete(params: HttpDeleteParams): Promise<unknown> {
    const headers = HttpImplService.buildHeaders(params);
    return this.httpClient.delete(`${ this.#baseUrl }${ params.path }`, { headers }).toPromise()
  }

}
