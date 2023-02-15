import http from '../connection-string';

class EducationService {
    getEducationData() {
        return http.get("/education")
    }
    postEducationDataById(id) {
        return http.post("/education/" + id);
    }
    updateEducationData() {
        return http.put("/education");
    }
    deleteEducationData() {
        return http.delete("/education");
    }
}
export default new EducationService();