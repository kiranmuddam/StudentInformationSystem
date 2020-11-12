import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin.service';
import {StudentService} from '../../services/student.service';
import {User} from '../../models/user';
import {Student} from '../../models/student';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userList: Array<Student>;

  constructor(private adminService: AdminService, private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.findAllStudents();
  }

  findAllStudents(){
    this.adminService.findAllStudents().subscribe(data => {
      this.userList = data;
    });
  }

  deleteStudent (id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.findAllStudents();
        },
        error => console.log(error));
  }

  detail(student: Student) {
    localStorage.setItem("detailStudent", JSON.stringify(student));
    this.router.navigate(['/student', student.rollNumber]);
  }

}
