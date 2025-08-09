#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 检查所有页面的h1标签数量...\n');

// 获取所有页面文件
function getPageFiles(dir, pages = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && file !== 'components' && file !== 'hooks' && file !== 'lib' && file !== 'config') {
      if (fs.existsSync(path.join(filePath, 'page.tsx'))) {
        pages.push(path.join(filePath, 'page.tsx'));
      }
      getPageFiles(filePath, pages);
    }
  });
  
  return pages;
}

// 检查文件中的h1标签数量
function checkH1Tags(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const h1Matches = content.match(/<h1/g);
    const h1Count = h1Matches ? h1Matches.length : 0;
    
    return {
      filePath,
      h1Count,
      hasMultipleH1: h1Count > 1
    };
  } catch (error) {
    return {
      filePath,
      h1Count: 0,
      hasMultipleH1: false,
      error: error.message
    };
  }
}

// 检查组件文件中的h1标签
function checkComponentFiles() {
  const componentDir = path.join(process.cwd(), 'components');
  const componentFiles = [];
  
  function scanComponents(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanComponents(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        componentFiles.push(filePath);
      }
    });
  }
  
  if (fs.existsSync(componentDir)) {
    scanComponents(componentDir);
  }
  
  return componentFiles;
}

// 主检查逻辑
try {
  const appDir = path.join(process.cwd(), 'app');
  const pageFiles = getPageFiles(appDir);
  const componentFiles = checkComponentFiles();
  
  console.log(`📁 找到 ${pageFiles.length} 个页面文件`);
  console.log(`🔧 找到 ${componentFiles.length} 个组件文件\n`);
  
  // 检查页面文件
  console.log('📄 检查页面文件:');
  let totalIssues = 0;
  
  pageFiles.forEach(pageFile => {
    const result = checkH1Tags(pageFile);
    const relativePath = path.relative(process.cwd(), result.filePath);
    
    if (result.hasMultipleH1) {
      console.log(`❌ ${relativePath} - ${result.h1Count} 个h1标签 (需要修复)`);
      totalIssues++;
    } else if (result.h1Count === 1) {
      console.log(`✅ ${relativePath} - ${result.h1Count} 个h1标签 (正确)`);
    } else if (result.h1Count === 0) {
      console.log(`⚠️  ${relativePath} - ${result.h1Count} 个h1标签 (无h1标签)`);
    } else {
      console.log(`❓ ${relativePath} - ${result.h1Count} 个h1标签 (未知状态)`);
    }
  });
  
  // 检查关键组件文件
  console.log('\n🔧 检查关键组件文件:');
  const criticalComponents = [
    'components/templates/GamePageTemplate.tsx',
    'components/game-section/GameSection.tsx',
    'components/layout/Header.tsx'
  ];
  
  criticalComponents.forEach(componentPath => {
    const fullPath = path.join(process.cwd(), componentPath);
    if (fs.existsSync(fullPath)) {
      const result = checkH1Tags(fullPath);
      const status = result.hasMultipleH1 ? '❌' : '✅';
      console.log(`${status} ${componentPath} - ${result.h1Count} 个h1标签`);
    }
  });
  
  // 总结
  console.log('\n📊 检查结果总结:');
  if (totalIssues === 0) {
    console.log('🎉 所有页面都只有一个h1标签，符合SEO最佳实践！');
  } else {
    console.log(`⚠️  发现 ${totalIssues} 个页面存在多个h1标签问题`);
    console.log('💡 建议：每个页面应该只有一个h1标签');
  }
  
  console.log('\n📋 SEO最佳实践提示:');
  console.log('- 每个页面应该只有一个h1标签');
  console.log('- h1标签应该包含页面的主要标题');
  console.log('- 其他标题应该使用h2、h3等标签');
  console.log('- 避免在组件中重复使用h1标签');
  
} catch (error) {
  console.error('❌ 检查过程中出现错误:', error.message);
  process.exit(1);
}
