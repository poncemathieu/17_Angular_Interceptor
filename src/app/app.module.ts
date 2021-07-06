import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { logInterceptor } from './common/log.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
                      provide: HTTP_INTERCEPTORS,
                      useClass: logInterceptor,
                      multi: true
              }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
