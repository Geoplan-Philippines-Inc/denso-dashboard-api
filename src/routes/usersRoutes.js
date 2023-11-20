const express = require('express');

const router = express.Router();

const { getUsers, postUsers, deleteUsers, updateUsers } = require("../controllers/usersController.js")

router.get("/", getUsers)

router.post("/", postUsers)

router.put("/:id", updateUsers)

router.delete("/:id", deleteUsers)

module.exports = router;