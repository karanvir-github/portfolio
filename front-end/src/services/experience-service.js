import http from '../connection-string';

class ExperienceService {
    getExperienceData() {
        return http.get("/experience");
    }
    postExperienceData() {
        return http.post("/experience");
    }
    updateExperienceData() {
        return http.put("/experience");
    }
    deleteExperienceData() {
        return http.delete("/experience");
    }
}
export default new ExperienceService();