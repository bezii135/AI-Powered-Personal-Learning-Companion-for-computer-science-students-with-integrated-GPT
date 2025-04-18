const express = require('express');
const router = express.Router();

// Example course data
const courses = [
  { id: 1, title: 'Intro to Programming', description: 'Start coding with Python.' },
  { id: 2, title: 'Web Dev Basics', description: 'Learn HTML, CSS, JavaScript.' },
];

// GET all courses
router.get('/', (req, res) => {
  res.json(courses);
});

// GET course by ID
router.get('/:id', (req, res) => {
  const course = courses.find(c => c.id == req.params.id);
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
});

module.exports = router;
