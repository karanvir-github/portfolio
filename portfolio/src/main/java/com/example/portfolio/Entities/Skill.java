package com.example.portfolio.Entities;

public class Skill {
    private String skill;

    public Skill(String skill) {
        this.skill = skill;
    }

    public Skill() {
        super();
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    @Override
    public String toString() {
        return "Skill [skill=" + skill + "]";
    }

}
