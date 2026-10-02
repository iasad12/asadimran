const fs = require('fs');
const https = require('https');
const path = require('path');

const fontUrl = 'https://raw.githubusercontent.com/googlefonts/spacegrotesk/main/fonts/ttf/SpaceGrotesk-Bold.ttf';
const dirPath = path.join(__dirname, '../src/assets');
const filePath = path.join(dirPath, 'SpaceGrotesk-Bold.ttf');

if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

https.get(fontUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download font. Status Code: ${response.statusCode}`);
    process.exit(1);
  }
  const fileStream = fs.createWriteStream(filePath);
  response.pipe(fileStream);
  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Font downloaded successfully.');
  });
}).on('error', (err) => {
  console.error('Error downloading font:', err.message);
  process.exit(1);
});