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

import com.example.java.demo.BusinessObjects.Experience;
import com.example.java.demo.Repositories.ExperienceRepository;

@RestController
@RequestMapping("/experience")
@CrossOrigin(origins = "http://localhost:3000/")
public class ExperienceController {

    @Autowired
    private ExperienceRepository experienceRepository;

    @GetMapping
    public ResponseEntity<List<Experience>> getExperience() {
        try {
            List<Experience> experiences = new ArrayList<Experience>();
            experiences = experienceRepository.findAll();
            return new ResponseEntity<>(experiences, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getExperienceById(@PathVariable Integer id) {
        Optional<Experience> experience = experienceRepository.findById(id);
        if (experience.isPresent()) {
            return new ResponseEntity<>(experience, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public ResponseEntity<Experience> addExperience(@RequestBody Experience experience) {
        try {
            Experience newExperience = experienceRepository.save(experience);
            return new ResponseEntity<>(newExperience, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editExperience(@PathVariable Integer id, @RequestBody Experience experience) {
        Optional<Experience> isExperienceExist = experienceRepository.findById(id);
        if (isExperienceExist.isPresent()) {
            Experience oldExperience = isExperienceExist.get();
            oldExperience.setJobTitle(experience.getJobTitle());
            oldExperience.setCompanyName(experience.getCompanyName());
            oldExperience.setStartDate(experience.getStartDate());
            oldExperience.setEndDate(experience.getEndDate());
            oldExperience.setPlace(experience.getPlace());
            oldExperience.setCompanyLogo(experience.getCompanyLogo());
            oldExperience.setCompanySlogan(experience.getCompanySlogan());
            oldExperience.setTaskPerformed(experience.getTaskPerformed());
            Experience updatedExperience = experienceRepository.save(oldExperience);
            return new ResponseEntity<Experience>(updatedExperience, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteExperience(@PathVariable Integer id) {
        try {
            experienceRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
