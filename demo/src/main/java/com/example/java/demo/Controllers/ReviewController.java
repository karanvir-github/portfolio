package com.example.java.demo.Controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.java.demo.BusinessObjects.Review;
import com.example.java.demo.Repositories.ReviewRepository;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping
    public ResponseEntity<List<Review>> getReviewList() {
        try {
            List<Review> reviews = new ArrayList<Review>();
            reviews = reviewRepository.findAll();
            return new ResponseEntity<>(reviews, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping
    public ResponseEntity<Review> addNewReview(@RequestBody Review review) {
        try {
            Review newReview = reviewRepository.save(review);
            return new ResponseEntity<>(newReview, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateReview(@RequestBody Review updatedReview, @PathVariable Integer id) {
        Optional<Review> existingReviewData = reviewRepository.findById(id);
        if (existingReviewData.isPresent()) {
            Review oldReview = existingReviewData.get();
            oldReview.setReview(updatedReview.getReview());
            oldReview.setStars(updatedReview.getStars());
            oldReview.setReviewerName(updatedReview.getReviewerName());
            reviewRepository.save(oldReview);
            return new ResponseEntity<>(oldReview, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReview(@PathVariable Integer id) {
        try {
            reviewRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
