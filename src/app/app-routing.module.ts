import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent  } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch:'full'
  },
  { path: 'dashboard',  loadChildren: () =>  import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { showHeader: true, showSidebar: true , showFooter : true
    }
  },
  {path: 'login', component: LoginComponent, data: { showHeader: false, showSidebar: false, showFooter : false}},
  {path: 'register', component: RegisterComponent, data: { showHeader: false, showSidebar: false, showFooter : false}},
  { path: 'auth',  loadChildren: () =>  import('./auth/auth.module').then(m => m.AuthModule),
    data: { showHeader: false, showSidebar: false , showFooter : false
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
