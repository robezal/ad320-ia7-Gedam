var json = require("../colors.json");
var express = require('express');
var router = express.Router();
var colors = json.colors;
/* GET home page. */
router.get('/all', function(req, res, next) {
  res.send(colors);
});

router.get("/:colorname", function (req, res, next) {
  for(var c in colors){
    if (colors[c].color = req.params.colorname)
      res.send(colors[c]);
  }
});
module.exports = router;


