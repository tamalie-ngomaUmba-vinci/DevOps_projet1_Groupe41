const express = require('express');
const router = express.Router();

const Berlin = require('../models/BerlinClock');



router.get('/', (req, res) => {
    console.log("Vous êtes bien sur la page du TDD");
    res.render('berlinClock.hbs');
});


router.post('/convertionBerlin', function (req, res, next) {
    console.log('Ici, commence la conversion');
    const hour = req.body.heure;
    const minutes = req.body.minutes

    // ici commencent les test 

    
});


module.exports = router;
