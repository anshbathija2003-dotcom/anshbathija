const fs = require('fs');
const path = require('path');
const src = "C:\\Users\\Anshb\\Downloads\\Ansh Bathija Website\\Assets";
const dest = "C:\\Users\\Anshb\\.gemini\\antigravity\\scratch\\anshbathija\\public";

try {
  // Let's assume the user meant "BG.png" or "BG.jpg". Let's try both.
  let found = false;
  ['BG.png', 'BG.jpg', 'BG.jpeg'].forEach(ext => {
      let fpath = path.join(src, ext);
      if (fs.existsSync(fpath)) {
         fs.copyFileSync(fpath, path.join(dest, 'BG' + path.extname(fpath)));
         console.log('Copied ' + ext);
         found = true;
      }
  });
  if(!found) {
     console.log('Files in dir:', fs.readdirSync(src));
  }
} catch (e) {
  console.log('Error:', e);
}
