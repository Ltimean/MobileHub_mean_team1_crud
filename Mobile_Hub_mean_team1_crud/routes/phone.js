var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Phone = require('../models/Phone');

/* GET ALL Phone */
router.get('/', function(req, res, next) {
  Phone.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Phone BY ID */
router.get('/:id', function(req, res, next) {
  Phone.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Phone */
router.post('/', function(req, res, next) {
  Phone.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Phone */
router.put('/:id', function(req, res, next) {
  Phone.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Phone */
router.delete('/:id', function(req, res, next) {
  Phone.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
