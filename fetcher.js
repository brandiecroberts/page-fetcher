const request = require('request');
// console.log(request);

const fs = require('fs');
// console.log(fs);

const input = process.argv.slice(2);

console.log(input);

const URL = input[2];
const file = input[3];

request(URL, (error, response, body) => {
  
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body);
  
  fs.writeFile(file, body, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(`Download and save ${body.length} bytes to ./index.html`);
  });
});
