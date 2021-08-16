import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

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
  {path: 'login', component: LoginComponent, data: { showHeader: false, showSidebar: false, showFooter : false}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
