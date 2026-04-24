const fs = require('fs');
const path = require('path');
const src = "C:\\Users\\Anshb\\Downloads\\Ansh Bathija Website\\Assets";
const dest = "C:\\Users\\Anshb\\.gemini\\antigravity\\scratch\\anshbathija\\public";
let files = ['Ansh Founder Photo Transparent.png', 'Helmet Ref.png'];
files.forEach(f => fs.copyFileSync(path.join(src, f), path.join(dest, f)));
console.log("copied successfully");
