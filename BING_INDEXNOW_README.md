# Bing IndexNow 快速提交指南

## 1. 生成密钥

1. 访问 [Bing IndexNow 入门页面](https://www.bing.com/indexnow/getstarted#)
2. 生成密钥并下载密钥文件
3. 将密钥文件上传到网站根目录

## 2. 提交 URL (curl 命令)

```bash
curl -X POST "https://www.bing.com/IndexNow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "plonky.top",
    "key": "693884809c514524a3d840047a805cf5",
    "keyLocation": "https://plonky.top/693884809c514524a3d840047a805cf5.txt",
    "urlList": [
      "https://plonky.top/",
      "https://plonky.top/short-life-2",
      "https://plonky.top/poor-eddie",
      "https://plonky.top/dreadhead-parkour",
      "https://plonky.top/short-ride",
      "https://plonky.top/happy-room",
      "https://plonky.top/about",
      "https://plonky.top/contact",
      "https://plonky.top/privacy-policy",
      "https://plonky.top/terms-of-service"
    ]
  }'
```

添加 `-v` 参数可查看详细响应：

```bash
curl -v -X POST "https://www.bing.com/IndexNow" ...
```

## 3. 当前已发布的游戏

根据网站当前状态，以下6个游戏已发布：

1. **Plonky** - 主页游戏
2. **Short Life 2** - 物理布娃娃游戏
3. **Poor Eddie** - 物理益智游戏
4. **Dreadhead Parkour** - 跑酷游戏
5. **Short Ride** - 自行车游戏
6. **Happy Room** - 沙盒游戏

## 4. 注意事项

- 请将 `YOUR_KEY_HERE` 替换为实际的 Bing IndexNow 密钥
- 确保密钥文件已正确上传到网站根目录
- 每次更新网站内容后，建议重新提交相关 URL
- 单个请求最多可提交 10,000 个 URL