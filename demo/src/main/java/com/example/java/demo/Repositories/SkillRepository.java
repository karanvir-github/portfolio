package com.example.java.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.java.demo.BusinessObjects.Skill;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Integer> {

}
