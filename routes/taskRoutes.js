const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/tasks', taskController.createTask.bind(taskController));
router.get('/tasks', taskController.getAllTasks.bind(taskController));
router.get('/tasks/:id', taskController.getTaskById.bind(taskController));
router.put('/tasks/:id', taskController.updateTask.bind(taskController));
router.delete('/tasks/:id', taskController.deleteTask.bind(taskController));

module.exports = router;
