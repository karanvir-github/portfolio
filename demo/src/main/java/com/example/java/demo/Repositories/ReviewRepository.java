package com.example.java.demo.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.java.demo.BusinessObjects.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
}
