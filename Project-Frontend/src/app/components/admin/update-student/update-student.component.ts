import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
  }

  updateStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService
    .updateStudent(this.student).subscribe(data => {
      console.log(data)
      this.student = new Student();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/students']);
  }

}
