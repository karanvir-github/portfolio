package com.example.portfolio.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.portfolio.Entities.Skill;
import com.example.portfolio.Services.SkillService;

@RestController
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping("/skills")
    public List<Skill> getSKills() {
        return this.skillService.getSkills();
    }

    @PostMapping("/add-skill")
    public Skill addSkill(@RequestBody Skill skill) {
        return this.skillService.addSkill(skill);
    }

    @PutMapping("/skill")
    public Skill editSkill(@RequestBody Skill skill) {
        return this.skillService.editSkill(skill);
    }

    @DeleteMapping("/skill")
    public ResponseEntity<HttpStatus> deleteSkill(@RequestBody String id) {
        try {
            this.skillService.deleteSkill(Integer.parseInt(id));
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
