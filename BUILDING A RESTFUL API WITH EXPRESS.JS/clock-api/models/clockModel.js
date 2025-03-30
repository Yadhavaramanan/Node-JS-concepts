const mongoose = require('mongoose');
const clockSchema = new mongoose.Schema({
 name: { type: String, required: true },
 brand: { type: String, required: true },
 price: { type: Number, required: true },
 createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Clock', clockSchema);