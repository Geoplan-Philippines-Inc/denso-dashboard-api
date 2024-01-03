const { default: mongoose } = require("mongoose")

const partsSchema = new mongoose.Schema({
    id: String,
    name: String,
    kpi_value: Number,
});

const Parts = mongoose.model('parts', partsSchema)

module.exports = Parts; 