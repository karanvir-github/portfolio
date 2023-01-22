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
import com.example.java.demo.BusinessObjects.Home;
import com.example.java.demo.Repositories.HomeRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/home")
public class HomeController {
    @Autowired
    private HomeRepository homeRepository;

    @GetMapping
    public ResponseEntity<List<Home>> getDataForHome() {
        try {
            List<Home> homeData = new ArrayList<Home>();
            homeData = homeRepository.findAll();
            return new ResponseEntity<>(homeData, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public ResponseEntity<Home> addNewDataForHome(@RequestBody Home data) {
        try {
            Home newHomeData = homeRepository.save(data);
            return new ResponseEntity<>(newHomeData, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateDataForHome(@RequestBody Home updatedData, @PathVariable Integer id) {
        Optional<Home> isDataExist = homeRepository.findById(id);
        if (isDataExist.isPresent()) {
            Home oldHomeData = isDataExist.get();
            oldHomeData.setAboutme(updatedData.getAboutme());
            oldHomeData.setHighlights(updatedData.getHighlights());
            oldHomeData.setPages(updatedData.getPages());
            homeRepository.save(oldHomeData);
            return new ResponseEntity<>(updatedData, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteDataForHome(@PathVariable Integer id) {
        try {
            homeRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
