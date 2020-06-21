const router = require("express").Router();

const Users = require("../users/usersModel")
const Items = require("./itemsModel")
const authenticate = require("../../../auth/middleware/authenticate")
const validate = require("../middleware/validate")

router.get("/:id/items", validate.validateUserId, (req, res) => {
    const {id} = req.params
})