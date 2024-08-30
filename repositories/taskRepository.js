const { Task } = require('../models');

class TaskRepository {
    async create(task) {
        return await Task.create(task);
    }

    async findAll() {
        return await Task.findAll();
    }

    async findById(id) {
        return await Task.findByPk(id);
    }

    async update(id, task) {
        return await Task.update(task, { where: { id } });
    }

    async delete(id) {
        return await Task.destroy({ where: { id } });
    }
}

module.exports = new TaskRepository();
