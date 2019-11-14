require('newrelic')
const mongoose = require('mongoose');
const db = require('../database/index.js');

module.exports = {
  getAll: function(callback) {
    console.log('getAll Model');
    db.imageInfo.find({}).exec(callback);
  },
  getByPlace: function(params, callback) {
    console.log('get image by placeid');
    db.imageInfo.find({listingId: Math.ceil(Math.random()*10000000)}).exec(callback);
  }
};

