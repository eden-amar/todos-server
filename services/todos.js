const {readFileSync, writeFileSync} = require('fs'); // return the text

function getTodos() {
    const value = JSON.parse(readFileSync('./data.json').toString());
   return value;
}

function setTodos(todos){ // set the text to the new todos
    const value = JSON.stringify(todos);
    writeFileSync('./data.json', value);
}

function addTodo({isDone, id, task, user}){
    const currentTodos = getTodos();
    currentTodos.push({
    isDone,
    id:btoa(Math.random()),
    task,
    user,
    });
    setTodos(currentTodos)
}

function deleteTodo(id){
    const currentTodos = getTodos();
    const filterTodos = currentTodos.filter(todo => todo.id !== id);

    setTodos(filterTodos);
}

function updateTodo(id, newTitle){
    const currentTodos = getTodos();
    
    const todoUpdats = currentTodos.find(todo => todo.id === id); 
    if(todoUpdats){
        todoUpdats.task  = newTitle;
    setTodos(currentTodos);
    }
}

/* function updateTodo2(id, updateTodo){
    const currentTodos = getTodos();
    currentTodos[id-1] = updateTodo;
    setTodos(currentTodos); 
} another option */

module.exports = {
    getTodos,
    addTodo,
    deleteTodo,
    updateTodo
}