package com.example.portfolio.Services;

import java.util.List;

import com.example.portfolio.Entities.Skill;

public interface SkillService {
    public List<Skill> getSkills();

    public Skill addSkill(Skill skill);

    public Skill editSkill(Skill skill);

    public void deleteSkill(Integer id);
}
