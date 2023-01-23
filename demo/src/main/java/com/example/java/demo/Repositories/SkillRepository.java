package com.example.java.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.java.demo.BusinessObjects.Skill;

public interface SkillRepository extends JpaRepository<Skill, Integer> {
}
