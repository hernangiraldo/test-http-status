import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpStatusInterceptor } from './interceptos/http-status.interceptor';
import { HttpStatusImplService } from './services/http-status/http-status-impl.service';
import { TokenInterceptor } from './interceptos/token.interceptor';
import { HttpImplService } from './services/http/http-impl.service';
import { HttpService } from './services/http/http-service';
import { HttpStatusService } from './services/http-status/http-status-service';
import { ErrorHandlerService } from './services/error-handler/error-handler-service';
import { ErrorHandlerImplService } from './services/error-handler/error-handler-impl.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => import('./pages/one/one.module').then(m => m.OneModule)
      },
      {
        path: '2',
        loadChildren: () => import('./pages/two/two.module').then(m => m.TwoModule)
      },
      {
        path: '3',
        loadChildren: () => import('./pages/tre/tre.module').then(m => m.TreModule)
      },
    ])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpStatusInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HttpService, useClass: HttpImplService},
    { provide: HttpStatusService, useClass: HttpStatusImplService},
    { provide: ErrorHandlerService, useClass: ErrorHandlerImplService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
