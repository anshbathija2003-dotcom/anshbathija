const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('C:/Users/Anshb/Downloads/Ansh Bathija Website/Assets/Resume.pdf');

pdf(dataBuffer).then(function(data) {
    console.log("---RESUME TEXT START---");
    console.log(data.text);
    console.log("---RESUME TEXT END---");
}).catch(e => console.log('Error:', e));
