const fs = require('fs');
const path = require('path');
const rl = require('readline');
const { stdin: input, stdout: output } = require('process');

const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'), {flags: 'a'}, 'utf-8');

const readLine = rl.createInterface({ input, output });

readLine.on('line', (data) => {
  if (data === 'exit') {
    process.exit();
  } 
  writeStream.write(data + '/n');
});

readLine.on('SIGINT', () => {
  console.log('Goodbye');
  process.exit();
});

console.log('Hello! Please, write something.');