import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OneService } from './one.service';
import { Services } from '../../static-values';
import { HttpStatusService, IHttpStatus } from '../../services/http-status/http-status-service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {


  statusOne: Observable<IHttpStatus>;
  resultOne: any[];

  statusTwo: Observable<IHttpStatus>;
  resultTwo: any[];

  constructor(
    private oneSvc: OneService,
    private httpStatus: HttpStatusService
  ) {
    this.statusOne = httpStatus.listen(Services.test_one);
    this.resultOne = [];
    this.statusTwo = httpStatus.listen(Services.test_two);
    this.resultTwo = [];
  }

  ngOnInit(): void {
    this.getInfo()
  }

  async getInfo() {
    try {
      this.resultOne = (await this.oneSvc.getData()).map(i => {
        i.text = i.texts.toUpperCase();
        return i;
      });
    } catch (e) {
      this.httpStatus.setInternalError(Services.test_one, 'NOOOOO from component')
    }
  }

  async getInfo2() {
    try {
      this.resultTwo = await this.oneSvc.getDataError()
    } catch (e) {}
  }

}
