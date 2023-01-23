package com.example.java.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.java.demo.BusinessObjects.Education;

public interface EducationRepository extends JpaRepository<Education, Integer> {

}
