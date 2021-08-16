import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AuthService } from './core/services/auth.service';
import { AuthModule } from './auth/auth.module';
import { HttpErrorInterceptor } from './core/interceptors/error.interceptor';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
    LayoutModule,
    DashboardModule,


  ],
  providers: [AuthService,
    {

      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
