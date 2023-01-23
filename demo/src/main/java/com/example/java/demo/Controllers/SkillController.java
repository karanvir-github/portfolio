package com.example.java.demo.Controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.java.demo.BusinessObjects.Skill;
import com.example.java.demo.Repositories.SkillRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/skills")
public class SkillController {

    @Autowired
    private SkillRepository skillRepository;

    @GetMapping
    public ResponseEntity<List<Skill>> getSkillList() {
        try {
            List<Skill> skills = new ArrayList<Skill>();
            skills = skillRepository.findAll();
            return new ResponseEntity<>(skills, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public ResponseEntity<Skill> addNewSkill(@RequestBody Skill skill) {
        try {
            Skill newSkill = skillRepository.save(skill);
            return new ResponseEntity<>(newSkill, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateSkill(@RequestBody Skill updatedSkill, @PathVariable Integer id) {
        Optional<Skill> existingSkillData = skillRepository.findById(id);
        if (existingSkillData.isPresent()) {
            Skill oldSkill = existingSkillData.get();
            oldSkill.setLanguages(updatedSkill.getLanguages());
            oldSkill.setFrameworks(updatedSkill.getFrameworks());
            oldSkill.setTools(updatedSkill.getTools());
            skillRepository.save(oldSkill);
            return new ResponseEntity<>(oldSkill, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteSkill(@PathVariable Integer id) {
        try {
            skillRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
