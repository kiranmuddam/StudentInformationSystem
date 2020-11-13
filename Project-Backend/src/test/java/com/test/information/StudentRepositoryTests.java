package com.test.information;

import com.test.information.model.Classroom;
import com.test.information.model.Student;
import com.test.information.repository.ClassroomRepository;
import com.test.information.repository.StudentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
public class StudentRepositoryTests {
    @Autowired
    private StudentRepository repo;

    @Autowired
    private ClassroomRepository repo1;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public  void testCreateStudent() {
        Student student = new Student();
        student.setRollNumber("N151061");
        student.setFirstName("Kiran Babu");
        student.setLastName("Muddam");
        student.setEmail("kiraniiitn@gmail.com");
        student.setMobile("9398584586");
        student.setAge(20);
        student.setGender("male");
        Classroom classroom = repo1.findByName("cse1");
        student.setClassRoom(classroom);
        Student savedStudent = repo.save(student);

        Student existedStudent = entityManager.find(Student.class, savedStudent.getUserId());

        assertThat(existedStudent.getEmail()).isEqualTo(student.getEmail());

    }

    @Test
    public void createClassRoom() {
        Classroom classroom = new Classroom();
        classroom.setName("cse4");
        classroom.setClassTeacher("Joginder");

        Classroom newClass = repo1.save(classroom);

        Classroom existedClassRoom = entityManager.find(Classroom.class, newClass.getId());

        assertThat(existedClassRoom.getName()).isEqualTo(classroom.getName());

    }
}
