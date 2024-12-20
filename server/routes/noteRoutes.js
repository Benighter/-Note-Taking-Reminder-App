const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Get all notes with reminders
router.get('/notes/with-reminders', noteController.getNotesWithReminders);

module.exports = router;
