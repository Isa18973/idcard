var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
module.exports = router;
router.post('/card', function(req, res)
{
  console.log(req.body.deteOfBirth)
  res.render('card', {
    firstName: req.body.fisrtName,
    lastName: req.body.lastName,
    type: req.body.type,
    dateOfBirth: new Date(req.body.dateOfBirth),
    addressLine1: req.body.addressLine1,
    addressLine2: req.body.addressline2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    accountNumber: 12345,
    //if you create a new Date with no value, it automatically uses today's date!
    currentDate: new Date()
  });
})
