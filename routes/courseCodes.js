// In routes/courseCodes.js
var express = require('express');
var router = express.Router();
const db = require('../db');  // Import the database connection

// GET /classCodes - get all alass codes
router.get('/', function(req, res, next) {
    db.any('SELECT courseCode FROM Courses;')
      .then(courseCodes => {
        console.log(courseCodes);
        res.json(courseCodes);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

module.exports = router;