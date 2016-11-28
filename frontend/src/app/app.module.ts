import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdlModule } from '../../node_modules/angular2-mdl'

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { GradeDetailComponent } from './dashboard/grade-detail/grade-detail.component';
import { GradesComponent } from './dashboard/grades/grades.component';
import { SubjectsComponent } from './dashboard/subjects/subjects.component';
import { SubjectDetailComponent } from './dashboard/subject-detail/subject-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    GradeDetailComponent,
    GradesComponent,
    SubjectsComponent,
    SubjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
