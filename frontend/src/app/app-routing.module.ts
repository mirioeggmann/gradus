import { NgModule }     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SemesterComponent } from './dashboard/semester/semester.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from "./AuthGuard";
import {GradeComponent} from "./dashboard/grade/grade.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',

  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'semester/new',
    component: SemesterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'grade/new',
    component: GradeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

export const routedComponents = [DashboardComponent, LoginComponent, RegisterComponent, ProfileComponent];
