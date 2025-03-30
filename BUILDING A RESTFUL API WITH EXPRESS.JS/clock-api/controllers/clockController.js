const Clock = require('../models/clockModel');
// Create a new clock
exports.createClock = async (req, res) => {
 try {
 const clock = new Clock(req.body);
 const savedClock = await clock.save();
 res.status(201).json(savedClock);
 } catch (error) {
 res.status(400).json({ message: error.message });
 }
};
// Get all clocks
exports.getClocks = async (req, res) => {
 try {

 const clocks = await Clock.find();
 res.status(200).json(clocks);
 } catch (error) {
 res.status(500).json({ message: error.message });
 }
};
// Get a clock by ID
exports.getClockById = async (req, res) => {
 try {
 const clock = await Clock.findById(req.params.id);
 if (!clock) return res.status(404).json({ message: 'Clock not found' });
 res.status(200).json(clock);
 } catch (error) {
 res.status(500).json({ message: error.message });
 }
};
// Update a clock
exports.updateClock = async (req, res) => {
 try {
 const updatedClock = await Clock.findByIdAndUpdate(req.params.id, req.body, { new: true });
 if (!updatedClock) return res.status(404).json({ message: 'Clock not found' });
 res.status(200).json(updatedClock);
 } catch (error) {
 res.status(400).json({ message: error.message });
 }
};

// Delete a clock
exports.deleteClock = async (req, res) => {
 try {
 const deletedClock = await Clock.findByIdAndDelete(req.params.id);
 if (!deletedClock) return res.status(404).json({ message: 'Clock not found' });
 res.status(200).json({ message: 'Clock deleted successfully' });
 } catch (error) {
 res.status(500).json({ message: error.message });
 }
};
