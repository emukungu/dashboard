var express = require('express');
var router = express.Router();

/* GET School Names*/
router.get('/',(req, res) => {
  var dbase = req.db
  var collect = dbase.collection('sama')
  collect.find({}).limit(20).toArray(function(err, docs){
    res.send(docs)
  })
})

module.exports = router;
