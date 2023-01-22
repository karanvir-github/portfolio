package com.example.java.demo.BusinessObjects;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String projectLogo;
    private String projectName;
    private String projectSlogan;
    private String projectUrl;
}
