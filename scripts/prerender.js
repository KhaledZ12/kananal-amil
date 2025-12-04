import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/domesticwork',
  '/about',
  '/services',
  '/nationalities',
  '/why-us',
  '/steps',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/terms-conditions'
];

const baseUrl = 'https://kanan-alamil.com'; // Production domain
const distDir = path.join(__dirname, '..', 'dist');

async function prerenderPages() {
  console.log('🚀 Starting static HTML generation...');
  
  try {
    // Read the main index.html template
    const mainHtmlPath = path.join(distDir, 'index.html');
    const mainHtml = fs.readFileSync(mainHtmlPath, 'utf8');
    
    // Generate static HTML for each route
    for (const route of routes) {
      console.log(`📄 Generating static HTML for: ${route}`);
      
      // Create route-specific HTML with proper meta tags
      let routeHtml = mainHtml;
      
      // Add route-specific meta tags based on route
      const metaTags = getMetaTagsForRoute(route);
      routeHtml = routeHtml.replace(
        /<title>.*?<\/title>/,
        `<title>${metaTags.title}</title>`
      );
      
      // Add meta description
      if (routeHtml.includes('<meta name="description"')) {
        routeHtml = routeHtml.replace(
          /<meta name="description" content=".*?">/,
          `<meta name="description" content="${metaTags.description}">`
        );
      } else {
        routeHtml = routeHtml.replace(
          '<head>',
          `<head>\n    <meta name="description" content="${metaTags.description}">`
        );
      }
      
      // Build route-specific full URL with trailing slash
      const canonicalRoute = route === '/' ? '/' : (route.endsWith('/') ? route : `${route}/`);
      const fullUrl = `${baseUrl}${canonicalRoute}`;

      // Ensure a single canonical tag points to the route-specific URL 
      if (/<link rel="canonical" href=".*?"\s*\/?>(\s*)?/i.test(routeHtml)) {
        routeHtml = routeHtml.replace(/<link rel=\"canonical\" href=\".*?\"\s*\/?>(\s*)?/i, `<link rel="canonical" href="${fullUrl}">`);
      } else {
        routeHtml = routeHtml.replace('<head>', `<head>\n    <link rel="canonical" href="${fullUrl}">`);
      }

      // Set Open Graph URL to route-specific URL
      if (/<meta\s+property=\"og:url\"\s+content=\".*?\"\s*\/?>(\s*)?/i.test(routeHtml)) {
        routeHtml = routeHtml.replace(/<meta\s+property=\"og:url\"\s+content=\".*?\"\s*\/?>(\s*)?/i, `<meta property="og:url" content="${fullUrl}" />`);
      } else {
        routeHtml = routeHtml.replace('<head>', `<head>\n    <meta property="og:url" content="${fullUrl}" />`);
      }

      // Set Twitter URL to route-specific URL
      if (/<meta\s+name=\"twitter:url\"\s+content=\".*?\"\s*\/?>(\s*)?/i.test(routeHtml)) {
        routeHtml = routeHtml.replace(/<meta\s+name=\"twitter:url\"\s+content=\".*?\"\s*\/?>(\s*)?/i, `<meta name="twitter:url" content="${fullUrl}" />`);
      } else {
        routeHtml = routeHtml.replace('<head>', `<head>\n    <meta name="twitter:url" content="${fullUrl}" />`);
      }
      
      // Determine the file path
      let filePath;
      if (route === '/') {
        // Don't overwrite main index.html for root
        continue;
      } else {
        const routeDir = path.join(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        filePath = path.join(routeDir, 'index.html');
      }
      
      // Write the HTML file
      fs.writeFileSync(filePath, routeHtml, 'utf8');
      console.log(`✅ Generated: ${filePath}`);
    }
    
    console.log('🎉 Static HTML generation completed successfully!');
    
  } catch (error) {
    console.error('❌ Static HTML generation failed:', error);
    process.exit(1);
  }
}

function getMetaTagsForRoute(route) {
  const metaData = {
    '/': {
      title: 'مكتب كنان الأمل - خدمات الهجرة والجنسية',
      description: 'مكتب كنان الأمل للخدمات القانونية والهجرة. نساعدك في الحصول على الجنسية والإقامة في أوروبا وأمريكا.'
    },
    '/domesticwork': {
      title: 'خدمات المكتب - مكتب كنان الأمل',
      description: 'تعرف على جميع خدمات مكتب كنان الأمل في مجال الهجرة والجنسية والخدمات القانونية.'
    },
    '/about': {
      title: 'من نحن - مكتب كنان الأمل',
      description: 'تعرف على مكتب كنان الأمل وخبرتنا في مجال الهجرة والجنسية. فريق محترف لخدمتك.'
    },
    '/services': {
      title: 'خدماتنا - مكتب كنان الأمل',
      description: 'خدمات شاملة في الهجرة والجنسية: الحصول على الجنسية الأوروبية، الإقامة، اللجوء، وأكثر.'
    },
    '/nationalities': {
      title: 'الجنسيات المتاحة - مكتب كنان الأمل',
      description: 'تعرف على جميع الجنسيات المتاحة: الألمانية، الإيطالية، البولندية، الأمريكية وغيرها.'
    },
    '/why-us': {
      title: 'لماذا تختارنا - مكتب كنان الأمل',
      description: 'خبرة واسعة، نسبة نجاح عالية، فريق محترف، ومتابعة مستمرة. اختر الأفضل لمستقبلك.'
    },
    '/steps': {
      title: 'خطوات الخدمة - مكتب كنان الأمل',
      description: 'تعرف على خطوات الحصول على الجنسية والإقامة. عملية واضحة ومنظمة لضمان النجاح.'
    },
    '/faq': {
      title: 'الأسئلة الشائعة - مكتب كنان الأمل',
      description: 'إجابات على أهم الأسئلة حول الهجرة والجنسية. كل ما تريد معرفته في مكان واحد.'
    },
    '/contact': {
      title: 'اتصل بنا - مكتب كنان الأمل',
      description: 'تواصل مع مكتب كنان الأمل. استشارة مجانية وخدمة عملاء متميزة على مدار الساعة.'
    },
    '/privacy-policy': {
      title: 'سياسة الخصوصية - مكتب كنان الأمل',
      description: 'سياسة الخصوصية وحماية البيانات في مكتب كنان الأمل. نحن نحترم خصوصيتك.'
    },
    '/terms-conditions': {
      title: 'الشروط والأحكام - مكتب كنان الأمل',
      description: 'الشروط والأحكام الخاصة بخدمات مكتب كنان الأمل. اقرأ قبل استخدام خدماتنا.'
    }
  };
  
  return metaData[route] || metaData['/'];
}

// Check if domain is accessible
async function checkServer() {
  try {
    const response = await fetch(baseUrl);
    if (response.ok) {
      return true;
    }
  } catch (error) {
    console.log(`⚠️  Could not reach ${baseUrl}:`, error.message);
    return false;
  }
  return false;
}

async function main() {
  console.log('🚀 Generating static HTML files for all routes...');
  await prerenderPages();
}

main().catch(console.error);
