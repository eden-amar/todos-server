const router = require('express').Router();
const usersService = require('../controllers/authentication-controller')

    router.post("/api/register", usersService.register);
    
    router.post("/api/login", usersService.login);

 
module.exports = router;