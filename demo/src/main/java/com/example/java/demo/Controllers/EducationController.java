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

import com.example.java.demo.BusinessObjects.Education;
import com.example.java.demo.Repositories.EducationRepository;

@RestController
@RequestMapping("/education")
@CrossOrigin(origins = "http://localhost:3000/")
public class EducationController {

    @Autowired
    private EducationRepository educationRepository;

    @GetMapping
    public ResponseEntity<List<Education>> getEducation() {
        try {
            List<Education> education = new ArrayList<Education>();
            education = educationRepository.findAll();
            return new ResponseEntity<>(education, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/id")
    public ResponseEntity<?> getEducationById(@PathVariable Integer id) {
        Optional<Education> education = educationRepository.findById(id);
        if (education.isPresent()) {
            return new ResponseEntity<>(education, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public ResponseEntity<Education> addEducation(@RequestBody Education education) {
        try {
            Education newEducation = educationRepository.save(education);
            return new ResponseEntity<>(newEducation, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editEducation(@PathVariable Integer id, @RequestBody Education education) {
        Optional<Education> isEducationExist = educationRepository.findById(id);
        if (isEducationExist.isPresent()) {
            Education oldEducation = isEducationExist.get();
            oldEducation.setCourseName(education.getCourseName());
            oldEducation.setCourseType(education.getCourseType());
            oldEducation.setStartDate(education.getStartDate());
            oldEducation.setEndDate(education.getEndDate());
            oldEducation.setPlace(education.getPlace());
            oldEducation.setInstitutionLogo(education.getInstitutionLogo());
            oldEducation.setInstitutionSlogan(education.getInstitutionSlogan());
            oldEducation.setLearning(education.getLearning());
            Education updatedEducation = educationRepository.save(oldEducation);
            return new ResponseEntity<Education>(updatedEducation, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEducation(@PathVariable Integer id) {
        try {
            educationRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
