/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Task management
 */

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: The field to sort by (priority, dueDate)
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *         description: The order of sorting (ASC, DESC)
 *     responses:
 *       200:
 *         description: A list of tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */

const taskService = require('../services/taskService');

class TaskController {
    async createTask(req, res) {
        const task = await taskService.createTask(req.body);
        res.status(201).json(task);
    }

    async getAllTasks(req, res) {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    }

    async getTaskById(req, res) {
        const task = await taskService.getTaskById(req.params.id);
        res.json(task);
    }

    async updateTask(req, res) {
        await taskService.updateTask(req.params.id, req.body);
        res.status(204).send();
    }

    async deleteTask(req, res) {
        await taskService.deleteTask(req.params.id);
        res.status(204).send();
    }
}

module.exports = new TaskController();
