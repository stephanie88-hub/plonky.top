const sharp = require('sharp');
const pngToIco = require('png-to-ico');
const path = require('path');
const fs = require('fs');

// 确保输出目录存在
const outputDir = path.join(__dirname, '../public/assets/img');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 输入文件路径
const inputFile = path.join(__dirname, '../public/assets/img/logo-plonky.png');

// 检查输入文件是否存在
if (!fs.existsSync(inputFile)) {
  console.error('❌ 输入文件不存在:', inputFile);
  process.exit(1);
}

// 定义需要转换的格式和尺寸
const conversions = [
  {
    name: 'favicon-16x16.png',
    width: 16,
    height: 16,
    format: 'png'
  },
  {
    name: 'favicon-32x32.png',
    width: 32,
    height: 32,
    format: 'png'
  },
  {
    name: 'android-chrome-192x192.png',
    width: 192,
    height: 192,
    format: 'png'
  },
  {
    name: 'android-chrome-512x512.png',
    width: 512,
    height: 512,
    format: 'png'
  },
  {
    name: 'apple-touch-icon.png',
    width: 180,
    height: 180,
    format: 'png'
  }
];

async function convertImages() {
  console.log('🔄 开始转换图像...');
  
  try {
    // 读取原始图像
    const image = sharp(inputFile);
    
    // 执行所有转换
    for (const conversion of conversions) {
      const outputPath = path.join(outputDir, conversion.name);
      
      console.log(`📸 正在生成 ${conversion.name} (${conversion.width}x${conversion.height})...`);
      
      await image
        .resize(conversion.width, conversion.height, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // 透明背景
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ ${conversion.name} 生成完成`);
    }
    
    // 生成ICO文件 (favicon.ico)
    console.log('📸 正在生成 favicon.ico...');
    const icoOutputPath = path.join(outputDir, 'favicon.ico');
    
    // 为ICO文件生成多个尺寸的PNG
    const icoSizes = [16, 32, 48];
    const icoPngPaths = [];
    
    for (const size of icoSizes) {
      const pngPath = path.join(outputDir, `temp-${size}x${size}.png`);
      await image
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(pngPath);
      icoPngPaths.push(pngPath);
    }
    
    // 使用png-to-ico库生成ICO文件
    const icoBuffer = await pngToIco(icoPngPaths);
    fs.writeFileSync(icoOutputPath, icoBuffer);
    
    // 清理临时PNG文件
    for (const pngPath of icoPngPaths) {
      fs.unlinkSync(pngPath);
    }
    
    console.log('✅ favicon.ico 生成完成');
    
    console.log('\n🎉 所有图像转换完成！');
    console.log('📁 输出目录:', outputDir);
    console.log('\n📋 生成的文件列表:');
    conversions.forEach(conv => {
      console.log(`  - ${conv.name} (${conv.width}x${conv.height})`);
    });
    console.log('  - favicon.ico');
    
  } catch (error) {
    console.error('❌ 转换过程中出现错误:', error);
    process.exit(1);
  }
}

// 运行转换
convertImages();
