import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IHttpStatus } from '../../services/http-status/http-status-service';

@Component({
  selector: 'app-tre',
  templateUrl: './tre.component.html',
  styleUrls: ['./tre.component.css']
})
export class TreComponent implements OnInit {

  asd!: Observable<IHttpStatus>;

  asd4!: Observable<IHttpStatus>;

  asd5!: Observable<IHttpStatus>;

  constructor() { }

  ngOnInit(): void {

  }

}
