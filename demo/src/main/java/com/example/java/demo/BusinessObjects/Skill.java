package com.example.java.demo.BusinessObjects;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "skill")
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String languages;
    private String frameworks;
    private String tools;
}
