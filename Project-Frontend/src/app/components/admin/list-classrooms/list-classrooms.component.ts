import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassRoom } from 'src/app/models/classroom';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-classrooms',
  templateUrl: './list-classrooms.component.html',
  styleUrls: ['./list-classrooms.component.css']
})
export class ListClassroomsComponent implements OnInit {

  classList: Array<ClassRoom>;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.findAllClassRooms();
  }

  findAllClassRooms(){
    this.studentService.getClassRooms().subscribe(data => {
      this.classList = data;
      console.log(this.classList)
    });
  }

  detail(classroom: ClassRoom) {
    this.router.navigate(['/classroom', classroom.name]);
  }


}
