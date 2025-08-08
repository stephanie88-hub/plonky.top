# 部署指南

## GitHub 仓库设置

✅ 已完成：
- [x] 初始化 Git 仓库
- [x] 添加所有文件到 Git
- [x] 创建初始提交
- [x] 推送到 GitHub 仓库 `stephanie88-hub/plonky.top`

## Vercel 部署步骤

### 1. 连接 GitHub 仓库到 Vercel

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 选择 "Import Git Repository"
4. 选择 `stephanie88-hub/plonky.top` 仓库
5. 点击 "Import"

### 2. 配置项目设置

在 Vercel 项目设置中配置以下内容：

#### 环境变量（如果需要）
- `BING_VERIFICATION_KEY` - 如果使用 Bing 验证
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID（可选）

#### 构建设置
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 3. 部署配置

项目已包含 `vercel.json` 配置文件，包含：
- 构建命令和输出目录
- 安全头设置
- 区域设置（香港 hkg1）
- 函数运行时配置

### 4. 自定义域名设置

1. 在 Vercel 项目设置中点击 "Domains"
2. 添加自定义域名 `plonky.top`
3. 按照 Vercel 的指示配置 DNS 记录

## Cloudflare R2 静态文件配置

### 1. 创建 R2 存储桶

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 "R2 Object Storage"
3. 创建新的存储桶，命名为 `plonky-static`
4. 设置适当的权限

### 2. 上传静态文件

将以下目录的文件上传到 R2：
- `public/assets/` - 图片和静态资源
- `public/game/` - 游戏文件

### 3. 配置 R2 域名

1. 在 R2 存储桶设置中创建自定义域名
2. 例如：`static.plonky.top` 或 `cdn.plonky.top`
3. 配置 DNS 记录指向 R2

### 4. 更新项目中的静态文件引用

如果需要使用 R2 中的静态文件，需要更新项目中的文件引用路径。

## 部署后检查清单

### 功能测试
- [ ] 网站首页正常加载
- [ ] 所有游戏页面可访问
- [ ] 游戏能正常加载和运行
- [ ] 图片和静态资源正常显示
- [ ] 移动端适配正常

### SEO 和性能
- [ ] 网站地图生成正常
- [ ] 元标签和结构化数据正确
- [ ] 页面加载速度良好
- [ ] 搜索引擎友好

### 安全设置
- [ ] HTTPS 证书正常
- [ ] 安全头设置生效
- [ ] 跨域设置正确

## 维护和更新

### 代码更新流程
1. 在本地修改代码
2. 提交到 GitHub：`git add . && git commit -m "更新描述" && git push`
3. Vercel 会自动触发重新部署

### 静态文件更新
1. 上传新文件到 Cloudflare R2
2. 清除 CDN 缓存（如果需要）
3. 更新项目中的文件引用（如果需要）

## 故障排除

### 常见问题
1. **构建失败**：检查 `package.json` 中的依赖和脚本
2. **静态文件 404**：确认 R2 配置和文件路径
3. **域名解析问题**：检查 DNS 设置
4. **游戏加载失败**：检查游戏文件路径和跨域设置

### 联系支持
- Vercel 支持：https://vercel.com/support
- Cloudflare 支持：https://support.cloudflare.com
- GitHub 支持：https://support.github.com
