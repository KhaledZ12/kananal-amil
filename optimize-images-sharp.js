import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Automated image optimization using Sharp
const imageDir = './dist/images/';
const outputDir = './dist/images/optimized/';

// Create output directory
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const images = [
    '07f9de6f-720f-4288-96e4-c19cde485df5.png',
    '20e8a503-fab3-411e-a7ac-2f74d7f4c36e.png', 
    '53e96e53-9676-4c04-8634-47e8f6f0d27e.png',
    '8d4e9246-3b92-4d2d-980b-d99e6fafb847.png',
    '9614185e-5be4-4b0c-bc1d-b75bcb946e8d.png',
    '9ae86b16-c49a-4230-9871-da27f5d6d803.png',
    'b948dc8c-1152-4c5f-bbd9-1e99095e08ff.png',
    'bf49d7a8-9eca-495d-aac9-c356789abfc8.png',
    'c30f371a-b648-48a6-b00e-c6f6820a21eb.png',
    'e38a8a55-47ee-4873-b698-0beb024ee5f9.png',
    'e4dc165c-0388-40d1-958b-146cb2b15a55.png',
    'logo.png'
];

async function optimizeImages() {
    console.log('Starting image optimization...');
    
    for (const img of images) {
        const inputPath = path.join(imageDir, img);
        const outputWebP = path.join(outputDir, img.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
        const outputCompressed = path.join(outputDir, img);
        
        if (fs.existsSync(inputPath)) {
            try {
                // Create WebP version
                await sharp(inputPath)
                    .webp({ quality: 85, effort: 6 })
                    .toFile(outputWebP);
                
                // Create compressed original format
                if (img.toLowerCase().endsWith('.png')) {
                    await sharp(inputPath)
                        .png({ quality: 85, compressionLevel: 9 })
                        .toFile(outputCompressed);
                } else {
                    await sharp(inputPath)
                        .jpeg({ quality: 85, progressive: true })
                        .toFile(outputCompressed);
                }
                
                const originalSize = fs.statSync(inputPath).size;
                const webpSize = fs.statSync(outputWebP).size;
                const compressedSize = fs.statSync(outputCompressed).size;
                
                console.log(`✓ ${img}: ${Math.round(originalSize/1024)}KB -> WebP: ${Math.round(webpSize/1024)}KB, Compressed: ${Math.round(compressedSize/1024)}KB`);
                
            } catch (error) {
                console.error(`✗ Error processing ${img}:`, error.message);
            }
        }
    }
    
    console.log('Image optimization completed!');
}

optimizeImages().catch(console.error);
