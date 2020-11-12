import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/api/students';
  private createUrl = 'http://localhost:8080/api/students/add';
  private updateUrl = 'http://localhost:8080/api/students/update';

  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      authorization:'Bearer ' + this.currentUser.token,
      "Content-Type":"application/json; charset=UTF-8"
    });
  }


  getStudent(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  createStudent(students: Object): Observable<Object> {
    return this.http.post(`${this.createUrl}`, students, {headers: this.headers});
  }

  updateStudent(students: Object): Observable<Object> {
    return this.http.post(`${this.updateUrl}`, students, {headers: this.headers});
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {headers: this.headers});
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

