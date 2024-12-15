import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/incidents' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'incidents',
    component: IncidentsComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
