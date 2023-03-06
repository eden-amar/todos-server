const img = document.createElement('img');
const div = document.createElement('div');
const inputUserName = document.createElement('input');
const inputPassword = document.createElement('input');
const title = document.createElement('h1');
const loginButton = document.createElement('button');

img.src = './img/todosApp.png';
title.textContent = 'TODOS APP';
loginButton.textContent = 'LOGIN';


inputUserName.placeholder = 'USER NAME';
inputPassword.placeholder = 'PASSWORD';
const body = document.querySelector('body');

div.append(inputUserName, inputPassword, loginButton);
body.append(img, title, div);

function login() {
    loginButton.addEventListener('click', () => {
        fetch(`http://localhost:3000/api/login`,{
            method:'POST'
        })
        // .then(window.open('./index.html'))
    })
    
}
login();

// clock


function getTime() {
    let time = new Date();
    let clockHours = time.getUTCHours() + 2;

    time.setHours(clockHours);
    return time;
}

function showClock() {
    let clockDiv = document.querySelector('.clock');
    clockDiv.textContent = getTime().toLocaleTimeString();
    ;
}

function tick() {
    showClock();
    setTimeout(tick, 1000);
}

tick();