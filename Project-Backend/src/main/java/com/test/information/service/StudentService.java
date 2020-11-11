package com.test.information.service;

import com.test.information.model.Student;

import java.util.List;

public interface StudentService {
    Student saveStudent(Student student);

    String findByRollNumber(String rollNumber);

    List<Student> finalAllStudents();
}
