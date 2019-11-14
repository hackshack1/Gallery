let model = require('../models/imageModel.js.js.js');

module.exports = {
  getImages: function(req, res, next) {
    console.log('getImages controller');
    model.getAll((err, result)=>{
      if(err) console.log(err);
      else res.send(result);
    });
  },
  getImage: function(req, res, next) {
    console.log('getImage controller');
    model.getByPlace(req.params.listingId, (err, result)=>{
      if(err) console.log(err);
      else {
        console.log('')
        console.log('result',result)
        res.send(result); 
      }
    });
  },
  postImage: function(req, res, next){
    console.log('postImage controller');
    model.postByPlace(req.params.placeid, (err,result) =>{
      if(err) console.log(err);
      else res.send(result);
    })
  }
}