const express = require("express");
const router = express.Router();
const User = require("../models/User");
const controllers = require("../Controllers/user.controller");


// PATH: http://localhost:5000/api/users/add_user
// add user
//

router.post("/add_user", controllers.adduser);

// PATH: http://localhost:5000/api/users
// get all users 


router.get("/", controllers.getusers);

//  http://localhost:5000/api/users/delete_user/:id
// delete user
//

router.delete("/delete_user/:id", controllers.deleteuserbyid);


// PATH: http://localhost:5000/api/users/edit_user/:id
// edit users 
//


router.put("/edit_user/:id", controllers.edituserbyid);

module.exports = router;
