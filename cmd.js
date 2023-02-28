const { getTodos, addTodo, deleteTodo, updateTodo} = require('./todos.js');
function displayTodos() {
    const todos = getTodos()
        .map((item) => `id: ${item.id} Task:${item.task}`)
        .join('\n')

    console.log(todos);
}

const operation = process.argv[2];
if (operation === 'create') {
    addTodo(process.argv[3],process.argv[4], process.argv[5]) ; // the name that i want to give to the new todo
} else if(operation === 'delete'){
    deleteTodo(process.argv[3]); // the number of todo that I want to delete
    console.log('TODO: Delete')
} else if(operation === 'update'){
    updateTodo(process.argv[3], process.argv[4]);
    console.log('TODO: Update')
}
else {
    console.log(displayTodos());
}