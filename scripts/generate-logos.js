const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure the public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function generateLogos() {
  try {
    // Read the original logo (assuming it's saved as logo-original.png)
    const originalLogo = path.join(__dirname, '../logo-original.png');
    
    if (!fs.existsSync(originalLogo)) {
      console.log('Please save your logo as "logo-original.png" in the project root');
      return;
    }

    // Generate different sizes and variants
    const variants = [
      { name: 'logo.png', size: 64, filter: 'default' },
      { name: 'logo-white.png', size: 64, filter: 'white' },
      { name: 'logo-sm.png', size: 32, filter: 'default' },
      { name: 'logo-sm-white.png', size: 32, filter: 'white' },
      { name: 'logo-lg.png', size: 128, filter: 'default' },
      { name: 'logo-lg-white.png', size: 128, filter: 'white' },
      { name: 'favicon.ico', size: 32, filter: 'default', format: 'ico' },
      { name: 'favicon-16x16.png', size: 16, filter: 'default' },
      { name: 'favicon-32x32.png', size: 32, filter: 'default' },
      { name: 'apple-touch-icon.png', size: 180, filter: 'default' },
    ];

    for (const variant of variants) {
      let image = sharp(originalLogo)
        .resize(variant.size, variant.size, {
          kernel: sharp.kernel.nearest, // Maintain pixel art sharpness
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        });

      // Apply white filter if needed - properly invert colors for dark mode
      if (variant.filter === 'white') {
        // Create white version with transparent background
        image = image
          .removeAlpha()
          .negate() // Invert colors to make dark pixels white
          .png({ transparency: true }); // Ensure transparency is preserved
      }

      // Set output format
      if (variant.format === 'ico') {
        image = image.png(); // ICO will be converted from PNG
      } else {
        image = image.png();
      }

      const outputPath = path.join(publicDir, variant.name);
      await image.toFile(outputPath);
      console.log(`Generated: ${variant.name}`);
    }

    console.log('All logo variants generated successfully!');
  } catch (error) {
    console.error('Error generating logos:', error);
  }
}

generateLogos();
