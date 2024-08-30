// services/projectService.js
const projectRepository = require('../repositories/projectRepository');

class ProjectService {
    async createProject(project) {
        return await projectRepository.create(project);
    }

    async getAllProjects() {
        return await projectRepository.findAll();
    }

    async getProjectById(id) {
        return await projectRepository.findById(id);
    }

    async updateProject(id, project) {
        return await projectRepository.update(id, project);
    }

    async deleteProject(id) {
        return await projectRepository.delete(id);
    }
}

module.exports = new ProjectService();
