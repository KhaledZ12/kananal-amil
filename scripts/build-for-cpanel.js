import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, '..', 'dist');

async function optimizeForCpanel() {
  console.log('🔧 Optimizing build for cPanel deployment...');
  
  try {
    // Create .htaccess file for proper routing
    const htaccessContent = `<IfModule mod_negotiation.c>
  Options -MultiViews
</IfModule>
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Force HTTPS
  RewriteCond %{HTTPS} !=on
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Enforce trailing slash for directory-like URLs (exclude files with extensions)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !(\.|/)$
  RewriteRule ^(.+)$ /$1/ [R=301,L]
  
  # If the request maps to an existing directory but the URL has no trailing slash, append it
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteCond %{REQUEST_URI} !/$
  RewriteRule ^(.+)$ /$1/ [R=301,L]
  
  # Handle prerendered pages first (serve their index.html)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} ^/(about|services|nationalities|why-us|steps|faq|contact|privacy-policy|terms-conditions|domesticwork)/?$ 
  RewriteRule ^(.*)$ /$1/index.html [L]
  
  # SPA routing - send all other non-file requests to index.html
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Caching for static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 7 days"
  ExpiresByType application/javascript "access plus 7 days"
  ExpiresByType image/png "access plus 30 days"
  ExpiresByType image/jpeg "access plus 30 days"
  ExpiresByType image/svg+xml "access plus 30 days"
  ExpiresByType text/html "access plus 1 hour"
  ExpiresDefault "access plus 1 day"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# As a final safety net for any unmatched routes, serve SPA index.html with HTTP 200
FallbackResource /index.html

# Disable caching for HTML to ensure HTTP 200 on refresh (no 304)
<IfModule mod_headers.c>
  <FilesMatch "\.html$">
    Header set Cache-Control "no-store, no-cache, must-revalidate, max-age=0"
    Header set Pragma "no-cache"
    Header set Expires "0"
  </FilesMatch>
  # Remove ETag to avoid conditional requests
  Header unset ETag
</IfModule>
FileETag None`;
    
    // Append Last-Modified unset to prevent conditional requests
    const htaccessNoLastModified = `${htaccessContent}
# Ensure Last-Modified is not sent to avoid 304
<IfModule mod_headers.c>
  Header unset Last-Modified
</IfModule>
`;

    fs.writeFileSync(path.join(distDir, '.htaccess'), htaccessNoLastModified);
    console.log('✅ Created optimized .htaccess file');
    
    // Create robots.txt if it doesn't exist
    const robotsPath = path.join(distDir, 'robots.txt');
    if (!fs.existsSync(robotsPath)) {
      const robotsContent = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: https://kanan-alamil.com/sitemap.xml`;
      
      fs.writeFileSync(robotsPath, robotsContent);
      console.log('✅ Created robots.txt file');
    }
    
    // Verify all prerendered pages exist
    const routes = [
      '/about',
      '/services', 
      '/nationalities',
      '/why-us',
      '/steps',
      '/faq',
      '/contact',
      '/privacy-policy',
      '/terms-conditions',
      '/domesticwork'
    ];
    
    let missingPages = [];
    for (const route of routes) {
      const pagePath = path.join(distDir, route, 'index.html');
      if (!fs.existsSync(pagePath)) {
        missingPages.push(route);
      }
    }
    
    if (missingPages.length > 0) {
      console.warn('⚠️  Missing prerendered pages:', missingPages);
      console.log('💡 Run: npm run build:prerender to generate all pages');
    } else {
      console.log('✅ All prerendered pages are present');
    }
    
    // Create deployment info file
    const deployInfo = {
      buildDate: new Date().toISOString(),
      prerenderPages: routes.length + 1, // +1 for root
      totalFiles: countFiles(distDir),
      deploymentReady: missingPages.length === 0
    };
    
    fs.writeFileSync(
      path.join(distDir, 'deployment-info.json'), 
      JSON.stringify(deployInfo, null, 2)
    );
    
    console.log('📊 Build Statistics:');
    console.log(`   - Prerendered pages: ${deployInfo.prerenderPages}`);
    console.log(`   - Total files: ${deployInfo.totalFiles}`);
    console.log(`   - Deployment ready: ${deployInfo.deploymentReady ? '✅' : '❌'}`);
    
    if (deployInfo.deploymentReady) {
      console.log('\n🎉 Build is ready for cPanel deployment!');
      console.log('📁 Upload the entire "dist" folder contents to your cPanel public_html directory');
    }
    
  } catch (error) {
    console.error('❌ Build optimization failed:', error);
    process.exit(1);
  }
}

function countFiles(dir) {
  let count = 0;
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      count += countFiles(fullPath);
    } else {
      count++;
    }
  }
  
  return count;
}

optimizeForCpanel().catch(console.error);
