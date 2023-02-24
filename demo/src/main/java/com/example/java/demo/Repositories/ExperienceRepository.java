package com.example.java.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.java.demo.BusinessObjects.Experience;

public interface ExperienceRepository extends JpaRepository<Experience, Integer> {

    @Query(value = "select * from experience order by start_date desc", nativeQuery = true)
    List<Experience> findAllByCusSQL();

}
