const { default: mongoose } = require("mongoose")

const zoneSchema = new mongoose.Schema({
    name: String,
    id: String,
    part: String
});

const Zone = mongoose.model('zone', zoneSchema)

module.exports = Zone;