package com.test.information.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    private String username;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Transient
    private String token;
}