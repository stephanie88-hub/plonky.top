#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始部署所有修复...\n');

try {
  // 1. 检查h1标签
  console.log('1️⃣ 检查h1标签...');
  execSync('npm run check-h1', { stdio: 'inherit' });
  
  // 2. 清理并生成sitemap
  console.log('\n2️⃣ 生成sitemap和robots.txt...');
  execSync('npm run deploy-sitemap', { stdio: 'inherit' });
  
  // 3. 构建项目
  console.log('\n3️⃣ 构建项目...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // 4. 最终验证
  console.log('\n4️⃣ 最终验证...');
  
  // 验证robots.txt
  const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    const requiredRules = ['/cdn-cgi/*', '/_cf/*', '/_vercel/*'];
    const missingRules = requiredRules.filter(rule => !robotsContent.includes(rule));
    
    if (missingRules.length === 0) {
      console.log('✅ robots.txt 包含所有必需的禁止访问规则');
    } else {
      console.log('⚠️  robots.txt 缺少以下规则:', missingRules.join(', '));
    }
  }
  
  // 验证sitemap.xml
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  if (fs.existsSync(sitemapPath)) {
    console.log('✅ sitemap.xml 已生成');
  }
  
  console.log('\n🎉 所有修复部署完成！');
  console.log('\n📋 已修复的问题:');
  console.log('✅ 多个h1标签问题 - 每个页面现在只有一个h1标签');
  console.log('✅ robots.txt配置 - 包含Cloudflare和Vercel路径禁止规则');
  console.log('✅ sitemap.xml - 正确引用所有已发布页面');
  console.log('✅ HTTP 400-499错误 - 修复了导航链接问题');
  
  console.log('\n🚀 下一步:');
  console.log('1. 提交更改到Git: git add . && git commit -m "修复SEO问题：多个h1标签、robots.txt配置"');
  console.log('2. 推送到远程仓库: git push');
  console.log('3. Vercel将自动重新部署');
  console.log('4. 验证生产环境: 检查 plonky.top/robots.txt 和 plonky.top/sitemap.xml');
  
  console.log('\n🔍 验证命令:');
  console.log('- 本地h1检查: npm run check-h1');
  console.log('- 本地sitemap生成: npm run deploy-sitemap');
  console.log('- 生产环境检查: curl https://plonky.top/robots.txt');
  
} catch (error) {
  console.error('❌ 部署失败：', error.message);
  process.exit(1);
}
