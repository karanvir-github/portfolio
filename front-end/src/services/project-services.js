import http from '../connection-string';

class ProjectService {
    getProjectData() {
        return http.get("/projects");
    }
    postProjectData() {
        return http.post("/projects");
    }
    updateProjectData() {
        return http.put("/projects");
    }
    deleteProjectData() {
        return http.delete("/projects");
    }
}
export default new ProjectService();