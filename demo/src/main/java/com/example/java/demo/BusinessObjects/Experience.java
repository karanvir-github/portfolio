package com.example.java.demo.BusinessObjects;

import java.sql.Date;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "experience")
public class Experience {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String jobTitle;
    private String companyName;
    private Date startDate;
    private Date endDate;
    private String place;
    private String companyLogo;
    private String companySlogan;
    private String taskPerformed;
}
