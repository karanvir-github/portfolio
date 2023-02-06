import http from '../connection-string';

class HomeService {
    getHomeData() {
        return http.get("/home");
    }
    postHomeData(data) {
        return http.post("/home", data)
    }
    updateHomeData(data, id) {
        return http.put("/home/" + id, data);
    }
    deleteHomeData() {
        return http.delete("/home");
    }
}
export default new HomeService();