const fs = require('fs');
const path = require('path');

// R2 CDN 基础URL
const R2_CDN_BASE = 'https://cdn.plonky.top';

// 游戏目录列表
const gameDirs = [
  'basketball-bros-unblocked',
  'brainrot-clicker', 
  'cheesechompers3d',
  'crazy-chicken-3d',
  'crazycattle3d',
  'crazycow3d',
  'futbol-libre',
  'pokemon-gamma-emerald',
  'sprunki-incredibox'
];

// 更新游戏文件中的静态资源路径
function updateGameFiles() {
  gameDirs.forEach(gameDir => {
    const indexPath = path.join('public', 'game', gameDir, 'index.html');
    
    if (fs.existsSync(indexPath)) {
      let content = fs.readFileSync(indexPath, 'utf8');
      
      // 更新背景图片路径
      content = content.replace(
        /background-image: url\('\/assets\/([^']+)'\);/g,
        `background-image: url('${R2_CDN_BASE}/assets/$1');`
      );
      
      // 更新其他可能的静态资源路径
      content = content.replace(
        /url\('\/assets\/([^']+)'\)/g,
        `url('${R2_CDN_BASE}/assets/$1')`
      );
      
      fs.writeFileSync(indexPath, content);
      console.log(`✅ Updated: ${indexPath}`);
    } else {
      console.log(`❌ File not found: ${indexPath}`);
    }
  });
}

// 更新网站清单文件
function updateWebManifest() {
  const manifestPath = 'public/assets/img/site.webmanifest';
  
  if (fs.existsSync(manifestPath)) {
    let content = fs.readFileSync(manifestPath, 'utf8');
    
    // 更新图标路径
    content = content.replace(
      /"src": "\/assets\/img\/([^"]+)"/g,
      `"src": "${R2_CDN_BASE}/assets/img/$1"`
    );
    
    fs.writeFileSync(manifestPath, content);
    console.log(`✅ Updated: ${manifestPath}`);
  }
}

// 执行更新
console.log('🔄 Updating static resource paths to R2 CDN...');
updateGameFiles();
updateWebManifest();
console.log('✅ All files updated successfully!');
