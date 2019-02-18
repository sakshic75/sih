const express = require('express');
const router = express.Router();
const db=require('./db/db');


router.get('/todos', function (req, res, next) {
     // route is now http://localhost:3000/route/specialRoute

     return res.send(db);
});

router.get('/', function (req, res, next) {
    // route is now http://localhost:3000/route
});

module.exports = router;