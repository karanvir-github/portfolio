import http from '../connection-string';

class EducationService {
    getEducationData() {
        return http.get("/education")
    }
    getEducationDataById(id) {
        return http.get("/education/" + id);
    }
    postEducationData(data) {
        return http.post("/education", data);
    }
    updateEducationData(data, id) {
        return http.put("/education/" + id, data);
    }
    deleteEducationData(id) {
        return http.delete("/education/" + id);
    }
}
export default new EducationService();