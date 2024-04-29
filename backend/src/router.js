const express =require('express');
const tasksController =require('./controllers/tasksController')

const router = express.Router();
const tasksMiddlewares =require('./middlewares/tasksMiddleware')

router.get('/tasks',tasksController.getAll);
router.post('/tasks',tasksMiddlewares.validateBody,tasksController.createdTask);

module.exports = router;