import { Injectable } from '@angular/core';
import { HttpGetParams, HttpService } from '../../services/http/http-service';
import { ApiUrls, Services } from '../../static-values';

@Injectable()
export class TwoService {

  constructor(
    private http: HttpService
  ) { }

  getData(): Promise<any> {
    const params = new HttpGetParams(ApiUrls.facts, Services.test_tre);
    return this.http.get(params);
  }
}
