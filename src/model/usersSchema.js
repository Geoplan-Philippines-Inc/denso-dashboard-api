const { default: mongoose } = require("mongoose")

const usersSchema = new mongoose.Schema({
    id: String,
    name: String,
    password: String,
    group_id: String,
    isLeader: Boolean,
    type: String,
    email: String,
});

const Users = mongoose.model('users', usersSchema)

module.exports = Users; 