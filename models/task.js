'use strict';
const {
  Model
} = require('sequelize');

// models/task.js

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - priority
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the task
 *         title:
 *           type: string
 *           description: The title of the task
 *         description:
 *           type: string
 *           description: The description of the task
 *         status:
 *           type: string
 *           description: The status of the task (pending, in_progress, completed)
 *         dueDate:
 *           type: string
 *           format: date
 *           description: The due date of the task
 *         priority:
 *           type: string
 *           description: The priority of the task (low, medium, high)
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date of the task
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date of the task
 */

module.exports = (sequelize, DataTypes) => {
  // Task model definition
};

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.STRING,
    due_date: DataTypes.DATE,
    projectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};