import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TwoComponent } from './two.component';
import { TwoService } from './two.service';

@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TwoComponent
      }
    ])
  ],
  providers: [
    TwoService
  ]
})
export class TwoModule { }
