const fs = require('fs');
const path = require('path');

// 获取当前日期时间
const currentDate = new Date().toISOString();

// 读取sitemap.xml文件
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// 更新所有lastmod日期为当前日期
sitemapContent = sitemapContent.replace(
  /<lastmod>.*?<\/lastmod>/g,
  `<lastmod>${currentDate}</lastmod>`
);

// 写回文件
fs.writeFileSync(sitemapPath, sitemapContent);

console.log(`✅ Sitemap updated with current date: ${currentDate}`);
