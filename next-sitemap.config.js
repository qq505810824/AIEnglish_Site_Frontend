/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.docai.net', // 更新为你的实际域名
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/'
            },
            {
                userAgent: '*',
                disallow: ['/api/', '/_next/', '/static/']
            }
        ],
        additionalSitemaps: [
            'https://www.docai.net/sitemap.xml'
            // 如果有其他sitemap可以在这里添加
        ]
    },
    exclude: [
        '/api/*',
        '/_next/*',
        '/static/*',
        '/404',
        '/500'
        // 添加其他需要排除的路径
    ],
    // 如果你的网站有动态路由，可以在这里配置
    // additionalPaths: async (config) => [
    //   await config.transform(config, '/additional-page'),
    // ],
    transform: async (config, path) => {
        // 为特定页面设置不同的优先级
        if (path === '/') {
            return {
                loc: path,
                changefreq: 'daily',
                priority: 1.0,
                lastmod: new Date().toISOString()
            };
        }

        // 其他页面的默认配置
        return {
            loc: path,
            changefreq: 'weekly',
            priority: 0.8,
            lastmod: new Date().toISOString()
        };
    }
};
