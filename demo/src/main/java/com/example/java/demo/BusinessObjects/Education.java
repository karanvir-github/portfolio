package com.example.java.demo.BusinessObjects;

import java.sql.Date;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "education")
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String courseName;
    private String courseType;
    private Date startDate;
    private Date endDate;
    private String place;
    private String institutionLink;
    private String institutionName;
}
