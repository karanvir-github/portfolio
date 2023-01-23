import http from '../connection-string'

class ReviewService {
    getReviewData() {
        return http.get("/reviews")
    }
    postReviewData() {
        return http.post("/reviews");
    }
    updateReviewData() {
        return http.put("/reviews");
    }
    deleteReviewData() {
        return http.delete("/reviews");
    }
}
export default new ReviewService();