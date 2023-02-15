import http from '../connection-string';

class ExperienceService {
    getExperienceData() {
        return http.get("/experience");
    }
    getExperienceDataById(id) {
        return http.get("/experience/" + id);
    }
    postExperienceData(data) {
        return http.post("/experience", data);
    }
    updateExperienceData(data, id) {
        return http.put("/experience/" + id, data);
    }
    deleteExperienceData() {
        return http.delete("/experience");
    }
}
export default new ExperienceService();