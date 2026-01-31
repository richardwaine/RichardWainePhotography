import { readFileSync, writeFileSync } from 'fs';

// Copy sitemap-0.xml content to sitemap.xml
const sitemap = readFileSync('dist/sitemap-0.xml', 'utf-8');
writeFileSync('dist/sitemap.xml', sitemap);

console.log('✓ Created dist/sitemap.xml');
