import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Services } from '../../static-values';
import { TwoService } from './two.service';
import { HttpStatusService, IHttpStatus } from '../../services/http-status/http-status-service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  tst$: Observable<IHttpStatus>;
  result: any[];

  constructor(
    private twoSvc: TwoService,
    private httpStatus: HttpStatusService
  ) {
    this.tst$ = httpStatus.listen(Services.test_tre)
    this.result = [];
  }

  ngOnInit(): void {
    this.getInfo()
  }

  async getInfo() {
    try {
      this.result = await this.twoSvc.getData()
    } catch (e) {}
  }

}
