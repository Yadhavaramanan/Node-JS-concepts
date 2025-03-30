const express = require('express');
const router = express.Router();
const clockController = require('../controllers/clockController');
// Routes for CRUD operations
router.post('/', clockController.createClock);
router.get('/', clockController.getClocks);
router.get('/:id', clockController.getClockById);
router.put('/:id', clockController.updateClock);
router.delete('/:id', clockController.deleteClock);
module.exports = router;