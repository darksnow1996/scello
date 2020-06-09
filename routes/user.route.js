var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

/* GET users listing. */
router.get('/',userController.getAllUsers);
router.get('/:userId', userController.getUser);
router.post('/create',userController.create);
router.put('/update',userController.updateUser);
router.delete('/delete',userController.deleteUser);


module.exports = router;
