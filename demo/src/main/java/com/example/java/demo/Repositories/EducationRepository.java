package com.example.java.demo.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.java.demo.BusinessObjects.Education;

public interface EducationRepository extends JpaRepository<Education, Integer> {

    @Query(value = "select * from education order by start_date desc", nativeQuery = true)
    List<Education> findAllByCusSQL();

}
