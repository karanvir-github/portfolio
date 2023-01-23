import http from '../connection-string';

class HomeService {
    getHomeData() {
        return http.get("/home");
    }
    postHomeData() {
        return http.post("/home");
    }
    updateHomeData() {
        return http.put("/home");
    }
    deleteHomeData() {
        return http.delete("/home");
    }
}
export default new HomeService();