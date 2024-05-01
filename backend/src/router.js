const express =require('express');
const tasksController =require('./controllers/tasksController')

const router = express.Router();
const tasksMiddlewares =require('./middlewares/tasksMiddleware')

router.get('/tasks',tasksController.getAll);
router.post('/tasks',tasksMiddlewares.validateFieldTitle,tasksController.createdTask);
router.delete('/tasks/:id',tasksController.deleteTask);
router.put('/tasks/:id',
tasksMiddlewares.validateFieldTitle,
tasksMiddlewares.validateFieldStatus,
tasksController.updateTask);

module.exports = router;