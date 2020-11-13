import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {DetailComponent} from './components/detail/detail.component';
import {AdminComponent} from './components/admin/admin.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {UnathorizedComponent} from './components/unathorized/unathorized.component';
import { CreateStudentComponent } from './components/admin/create-student/create-student.component';
import { UpdateStudentComponent } from './components/admin/update-student/update-student.component';


import {AuthGuard} from './guards/auth.guard';
import {Role} from './models/role';
import { ListClassroomsComponent } from './components/admin/list-classrooms/list-classrooms.component';
import { DetailClassroomComponent } from './components/admin/detail-classroom/detail-classroom.component';

const routes: Routes = [
  //public pages
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  //user+admin
  {path:'home',
  component: ProfileComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.USER, Role.ADMIN]}
  },
  {path:'student/:rollNumber',
  component:DetailComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path:'classroom/:name',
  component:DetailClassroomComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path:'students/add',
  component:CreateStudentComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path:'student/update/:rollNumber',
  component:UpdateStudentComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path:'students',
  component: AdminComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path:'classrooms',
  component: ListClassroomsComponent,
  canActivate: [AuthGuard],
  data: {roles: [Role.ADMIN]}
  },
  //public error pages.
  {path:'error/404', component: NotFoundComponent},
  {path:'error/401', component: UnathorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
constructor(private router: Router) {
  //For unkhown pages
  this.router.errorHandler = (error: any) => {
    this.router.navigate(['error/404']);
  }
}
}
