import http from '../connection-string';

class ProjectService {
    getProjectData() {
        return http.get("/projects");
    }
    postProjectData(data) {
        return http.post("/projects", data);
    }
    getProjectDataById(id) {
        return http.get("/projects/" + id);
    }
    updateProjectData(data, id) {
        return http.put("/projects/" + id, data);
    }
    deleteProjectData(id) {
        return http.delete("/projects/" + id);
    }
}
export default new ProjectService();