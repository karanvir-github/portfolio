package com.example.java.demo.BusinessObjects;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String review;
    private String stars;
    private String reviewerName;
}
