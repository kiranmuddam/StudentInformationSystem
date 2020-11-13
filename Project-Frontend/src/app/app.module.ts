import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailComponent } from './components/detail/detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UnathorizedComponent } from './components/unathorized/unathorized.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateStudentComponent } from './components/admin/create-student/create-student.component';
import { UpdateStudentComponent } from './components/admin/update-student/update-student.component';
import { ListClassroomsComponent } from './components/admin/list-classrooms/list-classrooms.component';
import { DetailClassroomComponent } from './components/admin/detail-classroom/detail-classroom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DetailComponent,
    AdminComponent,
    NotFoundComponent,
    UnathorizedComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    ListClassroomsComponent,
    DetailClassroomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
