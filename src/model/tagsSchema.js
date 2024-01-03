const { default: mongoose } = require("mongoose")

const tagsSchema = new mongoose.Schema({
    id: String,
    serial: String,
    assignedUser: String
});

const Tags = mongoose.model('tags', tagsSchema)

module.exports = Tags; 