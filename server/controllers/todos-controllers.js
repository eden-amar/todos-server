const todoService = require('../services/todos.js');


function getTodos (req,res)  {
    const getTodo = todoService.getTodos();
    res.json(getTodo);
    console.log(req.query);
}

function removeTodo (req, res) {
    const todoId = req.parmas.todoId;
    const delTodo = todoService.deleteTodo(todoId);
    res.json(delTodo);
}

function createTodo(req, res) {
    const createTodo = todoService.addTodo(req.body);
    res.json(createTodo);
}

function updateTodo (req, res) {
    const upTodo = todoService.updateTodo("83P2", "eden amarrrr");
   res.json(upTodo);
}


module.exports = {
    getTodos,
    removeTodo,
    createTodo,
    updateTodo
};