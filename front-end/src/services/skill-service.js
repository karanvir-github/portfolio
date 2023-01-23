import http from '../connection-string'

class SkillService {
    getSkills() {
        return http.get("/skills");
    }
    createSkill() {
        return http.post("/skills");
    }
    updateSkill() {
        return http.put("/skills");
    }
    deleteSkill() {
        return http.delete("/skills");
    }
}
export default new SkillService();