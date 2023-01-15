package com.example.portfolio.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.portfolio.Entities.Skill;

public interface SkillDao extends JpaRepository<Skill, Integer> {

}
