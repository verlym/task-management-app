// repositories/projectRepository.js
const { Project } = require('../models');

class ProjectRepository {
    async create(project) {
        return await Project.create(project);
    }

    async findAll() {
        return await Project.findAll();
    }

    async findById(id) {
        return await Project.findByPk(id, {
            include: ['tasks'] // Include tasks associated with the project
        });
    }

    async update(id, project) {
        return await Project.update(project, { where: { id } });
    }

    async delete(id) {
        return await Project.destroy({ where: { id } });
    }
}

module.exports = new ProjectRepository();
