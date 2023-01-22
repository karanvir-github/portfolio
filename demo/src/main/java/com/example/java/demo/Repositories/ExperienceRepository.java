package com.example.java.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.java.demo.BusinessObjects.Experience;

public interface ExperienceRepository extends JpaRepository<Experience, Integer> {

}
