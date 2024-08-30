const taskRepository = require('../repositories/taskRepository');

class TaskService {
    async createTask(task) {
        return await taskRepository.create(task);
    }

    async getAllTasks() {
        return await taskRepository.findAll();
    }

    async getTaskById(id) {
        return await taskRepository.findById(id);
    }

    async updateTask(id, task) {
        return await taskRepository.update(id, task);
    }

    async deleteTask(id) {
        return await taskRepository.delete(id);
    }
}

module.exports = new TaskService();
