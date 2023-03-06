
function gettodoColumn(todoData, key) {
    let td = document.createElement('td');

    switch(key){
        case 'task':  
            td.textContent = todoData[key]; 
            break;
        case 'user':
            td.textContent = todoData[key];
            break;
        case 'isDone':
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todoData[key];
            td.append(checkbox);

            break;
        case 'id':
            td.textContent = todoData[key];
            break;
        case 'delete':
            let trashIcon = document.createElement('img');
            trashIcon.src = './img/delete.png';

            trashIcon.addEventListener('click', () => {
                fetch(`http://localhost:3000/api/todos/${todoData.id}`,{
                    method:'DELETE'
                })
            })
            td.append(trashIcon);

            break;
        case 'update':
            let updateIcon = document.createElement('img');
            updateIcon.src = './img/update.png';
            
            td.append(updateIcon);
            break;

        default:
            td.textContent = todoData[key];
            break;
    }
   
    return td;
}

function getTodosColumns(todoData){
let keys = Object.keys(todoData);
return keys.map(key => gettodoColumn(todoData, key));

}

function getStudentRow(todoData){

let tr = document.createElement('tr');
let tds = getTodosColumns(todoData); 

tr.append(...tds);
    return tr;
}
function getStudentRows (todoData)
{
   return todoData.map((dataRow) => getStudentRow(dataRow));
}

function buildTableBody(todoData) {
    let tbody = document.querySelector('tbody');
    let rows = getStudentRows(todoData);
    tbody.append(...rows) 
}

let remoteData =  fetch('http://localhost:3000/api/todos') //http://localhost:3000/api/todos - cros
remoteData
    .then(response =>{ // wait on fetch() promise
        console.log(response);
        return response.json();
    })
    .then(todoData =>{ // wait on Json() Promise
        console.log(todoData);
        buildTableBody(todoData);
    });
