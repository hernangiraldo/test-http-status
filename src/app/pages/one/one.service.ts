import { Injectable } from '@angular/core';
import { HttpGetParams, HttpService } from '../../services/http/http-service';
import { ApiUrls, Services } from '../../static-values';

@Injectable()
export class OneService {

  constructor(
    private http: HttpService,
  ) { }

  async getData(): Promise<any[]> {
    const params = new HttpGetParams(ApiUrls.facts, Services.test_one)
    return await this.http.get<any[]>(params)
  }

  getDataError(): Promise<any[]> {
    const params = new HttpGetParams(ApiUrls.factsErr, Services.test_two);
    return this.http.get<any[]>(params)
      .then(resp => resp.map(i => {
        i.text = i.text.toUpperCase();
        return i;
      }));
  }
}
