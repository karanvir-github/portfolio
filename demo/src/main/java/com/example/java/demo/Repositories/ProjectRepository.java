package com.example.java.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.java.demo.BusinessObjects.Project;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
