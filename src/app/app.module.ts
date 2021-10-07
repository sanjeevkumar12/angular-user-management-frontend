import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { authInterceptorProviders } from './core/interceptors/auth.interceptor';
import { NotfoundComponent } from './core/components/notfound/notfound.component';
import { DialogModule } from './dialog/dialog.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    DialogModule,
    AuthModule,    
    LayoutModule,
    DashboardModule,
    AdminModule
  ],
  providers: [AuthService,
    {

      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
  
    },
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
