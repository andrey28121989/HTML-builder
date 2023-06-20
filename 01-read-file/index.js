const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'text.txt');

const readStream = fs.createReadStream(sourcePath, 'utf-8');

readStream.on('data', (chunk) =>  {
  console.log(chunk);
});