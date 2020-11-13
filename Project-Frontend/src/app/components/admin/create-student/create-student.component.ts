import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassRoom } from 'src/app/models/classroom';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;
  ClassRooms: Array<ClassRoom>;

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {
    this.findAllClassRooms();
  }
  findAllClassRooms(){
    this.studentService.getClassRooms().subscribe(data => {
      this.ClassRooms = data;
      console.log(this.ClassRooms);
    });
  }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    console.log(this.student);
    this.studentService
    .createStudent(this.student).subscribe(data => {
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
