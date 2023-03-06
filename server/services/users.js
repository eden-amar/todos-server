
const {readFile, writeFile} = require('fs/promises'); // return the text

const path = require("path");

async function getUser() {
    const value = JSON.parse(
        await readFile(path.resolve(__dirname, "../data/user-data.json"))
    );
      return value;
}


async function setUser(user){ // set the text to the new todos
    const value = JSON.stringify(user);
    await writeFile(path.resolve(__dirname, "../data/user-data.json"), value);
}

async function register({ id, email, userName, password}){
    const currentUser = await getUser();
    currentUser.push({
    id:btoa(Math.random()),
    email,
    userName,
    password
    });
    await setUser(currentUser);

    return {id, email, userName, password};
}

async function login(loginUser){
    const userData = await getUser();
    const matchUser = userData.find((user) => user.userName === loginUser.userName &&
                                               user.password === loginUser.password);
    console.log('user:', matchUser);
    return matchUser;
}

module.exports = {
login,
register,
getUser
}