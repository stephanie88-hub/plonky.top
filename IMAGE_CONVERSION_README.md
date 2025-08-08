# 图像转换工具使用说明

## 概述

这个工具可以将您的 `logo-plonky.png` 文件自动转换成网站所需的各种图标格式和尺寸。

## 生成的文件类型

脚本会生成以下文件：

### 1. 网站图标 (Favicons)
- `favicon-16x16.png` (16x16像素) - 标准网站图标
- `favicon-32x32.png` (32x32像素) - 高分辨率网站图标
- `favicon.ico` - 传统ICO格式图标，包含多个尺寸

### 2. Android Chrome 图标
- `android-chrome-192x192.png` (192x192像素) - Android设备Chrome浏览器图标
- `android-chrome-512x512.png` (512x512像素) - 高分辨率Android图标

### 3. Apple 设备图标
- `apple-touch-icon.png` (180x180像素) - iOS设备Safari浏览器图标

## 使用方法

### 1. 准备源文件
确保您的源文件 `logo-plonky.png` 位于 `public/assets/img/` 目录中。

### 2. 运行转换脚本
```bash
npm run convert-images
```

### 3. 查看结果
转换完成后，所有新生成的图标文件将保存在 `public/assets/img/` 目录中。

## 技术细节

### 使用的库
- **Sharp**: 高性能图像处理库，用于图像缩放和格式转换
- **png-to-ico**: 将PNG图像转换为ICO格式

### 图像处理设置
- **背景**: 透明背景 (`alpha: 0`)
- **缩放模式**: `contain` - 保持宽高比，确保图像完整显示
- **格式**: PNG格式，支持透明度

## 文件用途说明

### favicon.ico
- 用于传统浏览器的网站图标
- 包含16x16、32x32、48x48三种尺寸
- 支持IE等旧版浏览器

### favicon-16x16.png / favicon-32x32.png
- 现代浏览器的网站图标
- 支持透明度
- 更好的视觉效果

### android-chrome-*.png
- 专门为Android设备优化
- 192x192用于标准显示
- 512x512用于高分辨率显示

### apple-touch-icon.png
- 专门为iOS设备优化
- 180x180像素，适合iPhone和iPad
- 在Safari浏览器中显示

## 自定义配置

如果需要修改转换设置，可以编辑 `scripts/convert-images.js` 文件：

### 添加新的尺寸
```javascript
const conversions = [
  // ... 现有配置
  {
    name: 'custom-size.png',
    width: 128,
    height: 128,
    format: 'png'
  }
];
```

### 修改背景颜色
```javascript
background: { r: 255, g: 255, b: 255, alpha: 1 } // 白色背景
```

### 修改缩放模式
```javascript
fit: 'cover' // 填充模式，可能裁剪图像
fit: 'fill'  // 拉伸模式，可能变形
```

## 注意事项

1. **源文件质量**: 建议使用高质量的PNG文件作为源文件，尺寸至少512x512像素
2. **透明度**: 脚本会保持图像的透明度
3. **文件覆盖**: 运行脚本会覆盖现有的同名文件
4. **临时文件**: 脚本会自动清理转换过程中的临时文件

## 故障排除

### 常见问题

1. **"输入文件不存在"错误**
   - 确保 `logo-plonky.png` 文件位于正确位置
   - 检查文件名拼写是否正确

2. **转换失败**
   - 确保已安装所有依赖: `npm install`
   - 检查源文件是否为有效的PNG格式

3. **文件权限问题**
   - 确保对输出目录有写入权限
   - 在macOS/Linux上可能需要使用 `sudo`

## 更新网站配置

转换完成后，您可能需要在网站配置中引用这些图标：

### HTML head 标签示例
```html
<link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicon-32x32.png">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/img/apple-touch-icon.png">
```

### site.webmanifest 示例
```json
{
  "icons": [
    {
      "src": "/assets/img/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/assets/img/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```
