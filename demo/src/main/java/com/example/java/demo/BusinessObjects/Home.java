package com.example.java.demo.BusinessObjects;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "home")
public class Home {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Lob
    @Column(name = "aboutme", length = 10000)
    private String aboutme;

    @Lob
    @Column(name = "highlights", length = 10000)
    private String highlights;

    private String linkedin;
    private String github;
    private String youtube;
    private String instagram;
    private String leetcode;
}