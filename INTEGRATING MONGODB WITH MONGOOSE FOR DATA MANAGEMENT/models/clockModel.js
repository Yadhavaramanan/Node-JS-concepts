const mongoose = require('mongoose');
const clockSchema = new mongoose.Schema({
 name: {
 type: String,
 required: [true, 'Clock name is required'],
 minlength: [3, 'Name must be at least 3 characters long']
 },
 brand: {
 type: String,
 required: [true, 'Clock brand is required']
 },
 price: {
 type: Number,
 required: [true, 'Price is required'],
 min: [0, 'Price must be a positive number']
 },
 createdAt: {
 type: Date,
 default: Date.now
 }
});
module.exports = mongoose.model('Clock', clockSchema);