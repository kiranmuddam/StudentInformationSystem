import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Student} from '../../models/student';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  userId: string;
  currentStudent: Student;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.currentStudent = JSON.parse(localStorage.getItem('detailStudent'));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if(params.has('userId')){
        this.userId = params.get('userId');
      }
    });
  }

}
