var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var number1 = Math.floor(Math.random() * 10);
    var number2 = Math.floor(Math.random() * 10);
    var number3 = Math.floor(Math.random() * 10);
    var atanFunction = Math.atan(number1);
    var expFunction = Math.exp(number2);
    var expm1Function = Math.expm1(number3);
    res.render('computation',
                {
                    title: 'Tejaswini Kattukuri computing functions',
                    number1: number1,
                    number2: number2,
                    number3: number3,
                    atan: atanFunction,
                    exp: expFunction,
                    expm1: expm1Function
                });
});
module.exports = router;