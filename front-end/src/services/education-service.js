import http from '../connection-string';

class EducationService {
    getEducationData() {
        return http.get("/education")
    }
    postEducationData() {
        return http.post("/education");
    }
    updateEducationData() {
        return http.put("/education");
    }
    deleteEducationData() {
        return http.delete("/education");
    }
}
export default new EducationService();