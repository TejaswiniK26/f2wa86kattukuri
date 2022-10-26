var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var n1 = Math.floor(Math.random() * 10);
    var n2 = Math.floor(Math.random() * 10);
    var n3 = Math.floor(Math.random() * 10);
    var atanFunction = Math.atan(n1);
    var expFunction = Math.exp(n2);
    var expm1Function = Math.expm1(n3);
    res.render('computation',
                {
                    title: 'Tejaswini Kattukuri computing functions',
                    n1: n1,
                    n2: n2,
                    n3: n3,
                    atan: atanFunction,
                    exp: expFunction,
                    expm1: expm1Function
                });
});
module.exports = router;