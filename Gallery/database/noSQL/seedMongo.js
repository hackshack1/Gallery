const faker = require('faker');
const fs = require('fs');
const writeUsers = fs.createWriteStream('seedMongo.json');
writeUsers.write('\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
    let i = 100;
    let id = 5000001;
    let count = 1;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const url = faker.image.nature();
        const description = faker.lorem.sentences();
        const verify = faker.random.boolean();
        const data = {
          listingId: id,
            images:[
              {
               [count]:{
                  url: url,
                  description: faker.lorem.sentences(),
                  verification: verify
                },
                [count++]:{
                  url: url,
                  description: faker.lorem.sentences(),
                  verification: verify
                },
                [count++]:{
                  url: url,
                  description: faker.lorem.sentences(),
                  verification: verify
                },
                [count++]:{
                  url: url,
                  description: faker.lorem.sentences(),
                  verification: verify
                },
                [count++]:{
                  url: url,
                  description: faker.lorem.sentences(),
                  verification: verify
                }
              }
            ]
        };
        var jsonContent = JSON.stringify(data);
        if(id % 500000 === 0){
          console.log(id/500000 * 10);
        }
        if (i === 0) {
          writer.write(jsonContent, encoding, callback);
        } else {
  // see if we should continue, or wait
  // don't pass the callback, because we're not done yet.
          ok = writer.write(jsonContent, encoding);
        }
      } while (i > 0 && ok);
      if (i > 0) {
  // had to stop early!
  // write some more once it drains
        writer.once('drain', write);
      }
    }
  write()
  }

  writeTenMillionUsers(writeUsers, 'utf-8', () => {
    writeUsers.end();
  });