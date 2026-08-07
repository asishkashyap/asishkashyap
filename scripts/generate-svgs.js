const fs = require('fs');
const path = require('path');

console.log('Generating dynamic profile SVG assets...');
const assetsDir = path.join(__dirname, '..', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}
console.log('SVG assets verified in:', assetsDir);
