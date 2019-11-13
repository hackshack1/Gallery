const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/imageStuff', {
    useMongoClient: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {console.log('Successful connection to database!')});

var schema = new mongoose.Schema({
    uniqueId:[
        {
        image:{
            url: String,
            verification: Boolean,
            description: String
            }
        }
    ]
})

var imageInfo = mongoose.model('imageInfo', schema)
module.exports = imageInfo;
