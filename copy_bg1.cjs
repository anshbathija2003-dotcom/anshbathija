const fs = require('fs');
const path = require('path');
const src = "C:\\Users\\Anshb\\Downloads\\Ansh Bathija Website\\Assets";
const dest = "C:\\Users\\Anshb\\.gemini\\antigravity\\scratch\\anshbathija\\public";

try {
  let found = false;
  ['BG 1.png', 'BG 1.jpg', 'BG 1.jpeg', 'BG 1.webp'].forEach(ext => {
      let fpath = path.join(src, ext);
      if (fs.existsSync(fpath)) {
         fs.copyFileSync(fpath, path.join(dest, 'BG_1' + path.extname(fpath)));
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
