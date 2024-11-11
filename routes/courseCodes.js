// In routes/courseCodes.js
var express = require('express');
var router = express.Router();
const db = require('../db');  // Import the database connection

// GET /classCodes - get all class codes
router.get('/', function(req, res, next) {
    db.query('SELECT courseCode FROM Courses;')
      .then(courseCodes => {
        res.json(courseCodes);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });