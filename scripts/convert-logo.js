const sharp = require('sharp');
const fs = require('fs');

async function convertLogo() {
  try {
    const inputPath = 'public/images/logo.webp';
    const outputIconPath = 'src/app/icon.png';
    const outputLogoPath = 'public/images/logo.png';

    if (!fs.existsSync(inputPath)) {
        console.error('Logo not found at', inputPath);
        process.exit(1);
    }

    await sharp(inputPath)
      .resize(256, 256) // Favicons are usually square
      .png()
      .toFile(outputIconPath);
    console.log('Created src/app/icon.png');

    await sharp(inputPath)
      .png()
      .toFile(outputLogoPath);
    console.log('Created public/images/logo.png');

  } catch (error) {
    console.error('Error converting images:', error);
    process.exit(1);
  }
}

convertLogo();