const faker = require('faker');
const fs = require('fs');
const writeUsers = fs.createWriteStream('psqlData.csv');
writeUsers.write('', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
    let i = 10000000;
    let id = 0;
    let propertyId = 8000000/5
    let count = 8000000;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const url = faker.image.nature();
        const description = faker.lorem.sentences();
        const verify = faker.random.boolean();
        const data = `${propertyId}, ${id}, ${url}, ${description}, ${verify}\n`;
        count++;
        if(count % 5 === 0){
          propertyId++;
        }
        if(count % 500000 === 0){
          console.log('part completed')
        }
        if (i === 0) {
          writer.write(data, encoding, callback);
        } else {
  // see if we should continue, or wait
  // don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
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