import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OneComponent } from './one.component';
import { OneService } from './one.service';



@NgModule({
  declarations: [
    OneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OneComponent
      }
    ])
  ],
  providers: [
    OneService,
  ]
})
export class OneModule { }
