package com.example.java.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.java.demo.BusinessObjects.Home;
import com.example.java.demo.Repositories.HomeRepository;

@RestController
@RequestMapping("/home")
public class HomeController {
    @Autowired
    private HomeRepository homeRepository;

    @GetMapping
    public List<Home> getDataForHome() {
        return homeRepository.findAll();
    }

    @PostMapping
    public void addNewDataForHome(@RequestBody Home data) {
        homeRepository.save(data);
    }
}
