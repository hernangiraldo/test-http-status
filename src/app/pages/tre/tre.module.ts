import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreComponent } from './tre.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TreComponent
      }
    ])
  ]
})
export class TreModule { }
