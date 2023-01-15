package com.example.portfolio.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.portfolio.DAO.SkillDao;
import com.example.portfolio.Entities.Skill;

@Service
public class SkillServiceImpl implements SkillService {
    @Autowired
    private SkillDao skillDao;

    @Override
    public List<Skill> getSkills() {
        return skillDao.findAll();
    }

    @Override
    public Skill addSkill(Skill skill) {
        return skillDao.save(skill);
    }

    @Override
    public Skill editSkill(Skill skill) {
        return skillDao.save(skill);
    }

    @Override
    public void deleteSkill(Integer id) {
        Skill skill = skillDao.getOne(id);
        skillDao.delete(skill);
    }
}
