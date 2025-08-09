#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始部署sitemap和robots.txt...\n');

try {
  // 1. 清理旧文件
  console.log('1️⃣ 清理旧文件...');
  execSync('npm run clean-sitemap', { stdio: 'inherit' });
  
  // 2. 生成新的sitemap和robots.txt
  console.log('2️⃣ 生成新的sitemap和robots.txt...');
  execSync('next-sitemap', { stdio: 'inherit' });
  
  // 3. 验证生成的文件
  console.log('3️⃣ 验证生成的文件...');
  
  const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  if (!fs.existsSync(robotsPath)) {
    throw new Error('robots.txt 文件未生成');
  }
  
  if (!fs.existsSync(sitemapPath)) {
    throw new Error('sitemap.xml 文件未生成');
  }
  
  // 4. 检查robots.txt内容
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  console.log('✅ robots.txt 文件已生成');
  console.log('✅ sitemap.xml 文件已生成');
  
  // 5. 验证关键配置
  const requiredDisallows = [
    '/cdn-cgi/*',
    '/cdn-cgi/',
    '/_cf/*',
    '/_vercel/*'
  ];
  
  const missingDisallows = requiredDisallows.filter(disallow => 
    !robotsContent.includes(disallow)
  );
  
  if (missingDisallows.length > 0) {
    console.log('⚠️  警告：以下禁止访问规则缺失：');
    missingDisallows.forEach(rule => console.log(`   - ${rule}`));
  } else {
    console.log('✅ 所有必需的禁止访问规则都已包含');
  }
  
  // 6. 验证sitemap引用
  if (robotsContent.includes('Sitemap: https://plonky.top/sitemap.xml')) {
    console.log('✅ sitemap引用已正确添加');
  } else {
    console.log('❌ sitemap引用缺失');
  }
  
  console.log('\n🎉 部署完成！');
  console.log('\n📋 下一步：');
  console.log('1. 提交更改到Git');
  console.log('2. 推送到远程仓库');
  console.log('3. Vercel将自动重新部署');
  console.log('4. 检查生产环境的robots.txt');
  
} catch (error) {
  console.error('❌ 部署失败：', error.message);
  process.exit(1);
}
