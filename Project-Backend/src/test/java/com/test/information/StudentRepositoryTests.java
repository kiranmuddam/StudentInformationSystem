package com.test.information;

import com.test.information.model.Student;
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
        student.setClassRoom("cse1");
        student.setGender("male");

        Student savedStudent = repo.save(student);

        Student existedStudent = entityManager.find(Student.class, savedStudent.getUserId());

        assertThat(existedStudent.getEmail()).isEqualTo(student.getEmail());

    }
}
