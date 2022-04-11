const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'CS412' });
});

router.post('/', (req, res, next) => {

})

router.get('/submitForm', (req, res, next) => {
    let foo;
})
router.post('/submitForm', (req, res, next) => {
    let foo;
    res.render('index', { title: 'CS412', name: req.body.name, id: req.body.id  });
})
router.purge('/submitForm', (req, res, next) => {
    let foo;
    res.render('index', { title: 'CS412', name: req.body.name, id: req.body.id  });
})
router.route('/submitForm')
    .post( (req, res, next) => {
        let foo;
        res.render('index', {title: 'CS412', name: req.body.name, id: req.body.id});
    })
    .get( (req, res, net) => {
        res.render('index', { title: 'CS412', name: req.body.name, id: req.body.id  });
    })
    .purge( (req, res, next) => {
        let foo;
        res.render('index', { title: 'CS412', name: req.body.name, id: req.body.id  });
    })


//named parameter
//
router.get('/useNamedParam/:firstName', (req, res, next) => {
    res.render('index', { title: 'CS412', name: firstName, id: req.body.id  });
})
module.exports = router;