package com.test.information.controller;

import com.test.information.model.Classroom;
import com.test.information.model.Student;
import com.test.information.repository.ClassroomRepository;
import com.test.information.repository.StudentRepository;
import com.test.information.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class StudentController {

    private StudentService studentService;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ClassroomRepository classroomRepository;

    @GetMapping("/api/students")
    public ResponseEntity<?> allStudents() {
        return ResponseEntity.ok(studentRepository.findAll());
    }

    @PostMapping("/api/students")
    public ResponseEntity<?> createStudent(@RequestBody Student student) throws Exception {
        if (studentRepository.findByRollNumber(student.getRollNumber()).isPresent()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(studentRepository.save(student), HttpStatus.CREATED);
    }

    @PutMapping("/api/students/{id}")
    public ResponseEntity<Student> upStudent(@PathVariable(value = "id") Long studentId,
                                                   @Validated @RequestBody Student studentDetails) throws Exception {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new Exception("Student Not Found :: " + studentId));

        final Student updatedStudent = studentRepository.save(student);
        return ResponseEntity.ok(updatedStudent);
    }

    @GetMapping("/api/students/classrooms")
    public ResponseEntity<?> allClassRooms() {
        return ResponseEntity.ok(classroomRepository.findAll());
    }

    @GetMapping("/api/students/{id}")
    public ResponseEntity<?> getStudent(@PathVariable(value = "id") Long id) throws Exception {
        return ResponseEntity.ok(studentRepository.findById(id));
    }

    @DeleteMapping("/api/students/{id}")
    public Map<String, Boolean> deleteStudent(@PathVariable(value = "id") Long id) throws Exception {
        studentRepository.deleteById(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @GetMapping("/api/students/classroom/{name}")
    public List<Student> getClassroomStudents(@PathVariable(value = "name") String name) throws Exception {
        Classroom myClass = classroomRepository.findByName(name);
        List<Student> classStudents = studentRepository.findByClassRoom(myClass);
        return classStudents;
    }

}
