const express = require('express');
const router = express.Router();
const clockController = require('../controllers/clockController');
// Routes for CRUD operations
router.post('/', clockController.createClock); // Create a new clock
router.get('/', clockController.getClocks); // Get all clocks
router.get('/:id', clockController.getClockById); // Get a clock by ID
router.put('/:id', clockController.updateClock); // Update a clock by ID

router.delete('/:id', clockController.deleteClock); // Delete a clock by ID
module.exports = router;
