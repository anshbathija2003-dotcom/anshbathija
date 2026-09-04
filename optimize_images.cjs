const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const imagesToOptimize = [
  'FSAE 2.png',
  'DBEV 2.png',
  'SS 2.png',
  'AQA 2.png',
  'VOID 2.png',
  'FSAE.jpg',
  'DBEV.jpg',
  'SS.jpg',
  'AQA.jpg',
  'VOID.jpg'
];

async function optimize() {
  for (const file of imagesToOptimize) {
    const inputPath = path.join(publicDir, file);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping ${file}, not found.`);
      continue;
    }
    
    const parsed = path.parse(file);
    const outputPath = path.join(publicDir, `${parsed.name}.webp`);
    
    try {
      console.log(`Optimizing ${file}...`);
      await sharp(inputPath)
        .resize({ width: 1200, withoutEnlargement: true }) // Resize width to a max of 1200px
        .webp({ quality: 80 }) // Convert to webp with 80% quality
        .toFile(outputPath);
      console.log(`Successfully created ${parsed.name}.webp`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

optimize();
