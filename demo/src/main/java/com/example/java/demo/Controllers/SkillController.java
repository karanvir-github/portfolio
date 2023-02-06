package com.example.java.demo.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.java.demo.BusinessObjects.Skill;
import com.example.java.demo.Repositories.SkillRepository;

@RestController
@RequestMapping("/skills")
@CrossOrigin(origins = "http://localhost:3000/")
public class SkillController {

    @Autowired
    private SkillRepository skillRepository;

    @GetMapping
    public List<Skill> getSkillList() {
        return skillRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Skill> addNewSkill(@RequestBody Skill skill) {
        try {
            Skill newSkill = skillRepository.save(skill);
            return new ResponseEntity<>(newSkill, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
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
            return new ResponseEntity<>(updatedSkill, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}