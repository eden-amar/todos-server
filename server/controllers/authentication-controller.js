const userService = require('../services/users');

function register (req,res)  {
    const user = req.body;
    const newUser = userService.register(user);

    if(newUser){
        res.json(newUser);
    }
    else{
        res.status(409).send('conflict');
    }
}

function login (req, res) {
    const loginData = req.body;
    const userInfo = userService.login(loginData);
    if(userInfo){
        res.json(userInfo);
    } else {
        res.status(401).json({message: 'Unauthorized'})
    }
}

function getUser (req,res)  {
    const users = res.body;
    res.json(userService.getUser(users));
}

module.exports = {
    getUser,
    register,
    login
}

