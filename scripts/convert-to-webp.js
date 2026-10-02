const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await convertDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name) && entry.name !== 'logo.png' && entry.name !== 'icon.png') {
      const ext = path.extname(entry.name);
      const webpPath = fullPath.slice(0, -ext.length) + '.webp';

      console.log(`Converting ${fullPath} to WebP...`);
      try {
        await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath);
        fs.unlinkSync(fullPath); // Delete the original
      } catch (err) {
        console.error(`Failed to convert ${fullPath}:`, err);
      }
    }
  }
}

async function run() {
  const publicDir = path.join(__dirname, '../public');
  await convertDirectory(publicDir);
  console.log('Finished converting images to WebP.');
}

run();