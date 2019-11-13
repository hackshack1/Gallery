require('newrelic');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/listingImage', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('connection opened');
});

var schema = new mongoose.Schema({
  listingId: Number,
  images:[
      {
      image:{
          url: String,
          verification: Boolean,
          description: String
          }
      }
  ]
}, {collection: 'listingImage'})
var imageInfo = mongoose.model('listingImage', schema)

module.exports = {
  imageInfo
};
