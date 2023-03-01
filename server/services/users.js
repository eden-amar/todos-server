
const {readFileSync, writeFileSync} = require('fs'); // return the text

const path = require("path");

function getUser() {
    const value = JSON.parse(
        readFileSync(path.resolve(__dirname, "../data/user-data.json"))
    );
      return value;
}


function setUser(user){ // set the text to the new todos
    const value = JSON.stringify(user);
    writeFileSync(path.resolve(__dirname, "../data/user-data.json"), value);
}

function register({ id, email, userName, password}){
    const currentUser = getUser();
    currentUser.push({
    id:btoa(Math.random()),
    email,
    userName,
    password
    });
    setUser(currentUser);

    return {id, email, userName, password};
}

function login(loginUser){
    const userData = getUser();
    const matchUser = userData.find((user) => {user.userName === loginUser.userName &&
                                               user.password === loginUser.password});
    return matchUser;
}

module.export = {
login,
register,
getUser
}