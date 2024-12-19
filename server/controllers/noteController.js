const Note = require('../models/note.model');

exports.getNotesWithReminders = async (req, res) => {
  try {
    const notes = await Note.find({ reminderDate: { $exists: true } }).sort({ priority: -1, reminderDate: 1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
