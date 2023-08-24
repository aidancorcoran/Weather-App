// Import the fs module
const fs = require('fs');

// Define the file path
const filePath = '../api_key.txt';

// Read the content of the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Pass the data to another function/module
  anotherFunction(data);
});