import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.component.html',
  styleUrls: ['./detail-classroom.component.css']
})
export class DetailClassroomComponent implements OnInit {

  name: string;
  allClassStudents: Array<Student>

  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.has('name')){
        this.name = params.get('name');
        console.log(this.name);
      }
      this.findAllClassStudents();
    });
  }

  findAllClassStudents() {
    this.studentService.getClassStudents(this.name).subscribe(data => {
      this.allClassStudents = data;
      console.log(this.allClassStudents);
    });
  }

  deleteStudent (id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.findAllClassStudents();
        },
        error => console.log(error));
  }

  detail(student: Student) {
    localStorage.setItem("detailStudent", JSON.stringify(student));
    this.router.navigate(['/student', student.rollNumber]);
  }

}
