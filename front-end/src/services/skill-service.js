import http from '../connection-string'

class SkillService {
    getSkills() {
        return http.get("/skills");
    }
    createSkill(data) {
        return http.post("/skills", data);
    }
    updateSkill(data, id) {
        return http.put("/skills/" + id, data);
    }
    deleteSkill() {
        return http.delete("/skills");
    }
}
export default new SkillService();