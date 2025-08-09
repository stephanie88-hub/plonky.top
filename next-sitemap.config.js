// @ts-check
const { siteConfig } = require('./config/site');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:  siteConfig.url,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.9,
  outDir: './public',
  generateIndexSitemap: false,  // 禁用索引 sitemap
  // 排除未发布的游戏页面，只保留已发布的页面
  exclude: [
    '/basketball-bros-unblocked',
    '/brainrot-clicker', 
    '/cheese-chompers-3d',
    '/crazy-chicken-3d',
    '/crazy-cow-3d',
    '/futbol-libre',
    '/mutilate-a-doll-2',
    '/pokemon-gamma-emerald',
    '/sprunki-incredibox',
    '/stickman-dismounting'
  ],
  transform: async (config, path) => {
    let priority = 0.9;
    let changefreq = 'monthly';

    if (path === '/' || path === '') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/privacy-policy' || path === '/terms-of-service' || path === '/about' || path === '/contact') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/short-life-2' || path === '/poor-eddie' || path === '/dreadhead-parkour' || path === '/short-ride' || path === '/happy-room') {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    }
  },
  robotsTxtOptions: {
    // 添加robots.txt的注释信息
    additionalSitemaps: [
      `${siteConfig.url}/sitemap.xml`,
    ],
    policies: [
      // 常规搜索引擎规则
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/game/*',
          '/assets/*',
          '/api/*',
          '/admin/*',
          '/_next/*',
          '/static/*',
          '/cdn-cgi/*',
          '/cdn-cgi/',
          '/_cf/*',
          '/_vercel/*',
          '/temp/*',
          '/tmp/*'
        ],
      },

      // 专用 AI 爬虫 - 仅允许访问 llms 文件
      {
        userAgent: 'GPTBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'OAI-SearchBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'Anthropic-AI',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'ClaudeBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'PerplexityBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'DeepseekBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'cohere-ai',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'YouBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'GoogleOther',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'DuckAssistBot',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
      {
        userAgent: 'Bytespider',
        disallow: '/',
        allow: ['/llms.txt', '/llms-full.txt'],
      },
    ],
  },
}
