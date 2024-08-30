// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/projects', projectController.createProject.bind(projectController));
router.get('/projects', projectController.getAllProjects.bind(projectController));
router.get('/projects/:id', projectController.getProjectById.bind(projectController));
router.put('/projects/:id', projectController.updateProject.bind(projectController));
router.delete('/projects/:id', projectController.deleteProject.bind(projectController));

module.exports = router;
