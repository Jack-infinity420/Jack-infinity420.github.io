# Hexo博客Vercel+jsDelivr加速部署指南

## 🚀 部署方案概述

本方案采用 **Vercel + jsDelivr** 组合，实现全球CDN加速，特别优化中国地区访问速度。

### 技术架构
```
用户访问 → Vercel全球CDN → GitHub源站
静态资源 → jsDelivr双线CDN → 国内/国外最优节点
```

## 📋 前置准备

### 1. 创建GitHub仓库
- 在GitHub创建新的仓库（如：`your-blog-name`）
- 仓库设为公开（Public）

### 2. 注册Vercel账号
- 访问 [vercel.com](https://vercel.com)
- 使用GitHub账号登录

## 🔧 部署步骤

### 步骤1：推送代码到GitHub

```bash
# 初始化Git（如果尚未初始化）
git init
git add .
git commit -m "Initial commit: Hexo blog with Vercel deployment"

# 添加远程仓库
git remote add origin https://github.com/your-username/your-blog-name.git

# 推送代码
git branch -M main
git push -u origin main
```

### 步骤2：Vercel部署配置

1. **登录Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 点击"New Project"

2. **导入GitHub仓库**
   - 选择刚创建的GitHub仓库
   - 授权Vercel访问权限

3. **配置项目设置**
   - **Framework Preset**: Other
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `public`
   - **Install Command**: `npm install`

4. **环境变量**（可选）
   - `NODE_ENV`: `production`

5. **点击Deploy**
   - 等待构建完成（约1-3分钟）

### 步骤3：自定义域名（可选）

1. 在Vercel项目设置中点击"Domains"
2. 添加你的自定义域名
3. 按照提示配置DNS记录

## ⚡ 性能优化配置

### 已配置的优化项

1. **CDN加速**
   - Butterfly主题已配置jsDelivr CDN
   - 第三方库通过jsDelivr加载

2. **资源预加载**
   - 字体文件预加载
   - 关键CSS预加载
   - DNS预解析

3. **缓存策略**
   - 静态资源长期缓存（1年）
   - HTML页面适当缓存（1小时）

4. **安全头设置**
   - XSS防护
   - 点击劫持防护
   - MIME类型嗅探防护

## 🛠️ 日常更新流程

### 发布新文章

```bash
# 1. 创建新文章
hexo new "文章标题"

# 2. 编辑文章内容
# 编辑 source/_posts/文章标题.md

# 3. 本地预览
hexo clean && hexo g && hexo s

# 4. 推送到GitHub
git add .
git commit -m "发布新文章：文章标题"
git push origin main

# 5. Vercel自动部署（无需操作）
# 推送后Vercel会自动构建和部署
```

### 修改主题配置

```bash
# 1. 修改 _config.butterfly.yml
# 2. 本地测试
hexo clean && hexo g && hexo s
# 3. 推送更新
git add .
git commit -m "更新主题配置"
git push origin main
```

## 📊 监控和分析

### Vercel内置分析
- 访问速度监控
- 流量统计
- 错误日志
- 性能指标

### 第三方分析（可选）
- Google Analytics
- 百度统计
- CloudFlare Analytics

## 🔍 故障排除

### 常见问题

**1. 构建失败**
- 检查 `package.json` 依赖是否正确
- 查看Vercel构建日志
- 确保Node.js版本兼容

**2. 资源加载慢**
- 检查CDN配置是否正确
- 确认jsDelivr链接可访问
- 优化图片大小

**3. 自定义域名问题**
- 检查DNS记录是否正确
- 确认域名已备案（国内访问）
- 等待DNS传播（最多48小时）

### 调试命令

```bash
# 本地构建测试
npm run vercel-build

# 检查构建产物
ls -la public/

# 验证配置文件
node -e "console.log(require('./package.json').scripts)"
```

## 🎯 性能基准

部署完成后，预期性能指标：
- **首次加载时间**: < 2秒
- **重复访问**: < 1秒
- **全球访问延迟**: < 100ms
- **可用性**: 99.99%

## 📞 技术支持

如果遇到问题：
1. 查看Vercel部署日志
2. 检查GitHub Actions状态
3. 参考Hexo官方文档
4. 查看Butterfly主题文档

---

**部署完成！你的博客现在拥有全球CDN加速，访问速度大幅提升！** 🎉