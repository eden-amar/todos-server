const router = require('express').Router();
const todosController = require('../controllers/todos-controllers.js')

    router.get("/api/todos", todosController.getTodos);
    
    router.delete('/api/todos', todosController.removeTodo);
    
    router.put("/api/todos/:todoId", todosController.updateTodo);
    
    router.post("/api/todos", todosController.createTodo);


module.exports = router;