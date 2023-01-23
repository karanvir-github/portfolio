package com.example.java.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.java.demo.BusinessObjects.Home;

public interface HomeRepository extends JpaRepository<Home, Integer> {

}
