// SEO配置文件
export const siteConfig = {
    name: 'AI English',
    description:
        'A next-generation platform for English writing, reading and speaking, powered by cutting-edge AI.',
    url: 'https://www.docai.net', // 更新为你的实际域名
    ogImage: 'https://www.docai.net/og-image.jpg', // 更新为你的OG图片URL
    links: {
        // 移除了twitter和github链接，因为你们没有这些账户
    }
};

export const seoConfig = {
    metadataBase: new URL(siteConfig.url),
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: [
        'AI English',
        'English learning',
        'AI-powered education',
        'English writing',
        'English speaking',
        'English reading',
        'AI grading',
        'adaptive learning'
    ],
    authors: [
        {
            name: 'AI English Team',
            url: siteConfig.url
        }
    ],
    creator: 'AI English Team',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name
            }
        ]
    },
    twitter: {
        cardType: 'summary_large_image',
        site: '@aienglish', // 你可以稍后替换为实际的Twitter账号，或者移除这行
        handle: '@aienglish' // 你可以稍后替换为实际的Twitter账号，或者移除这行
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png'
    },
    manifest: '/site.webmanifest', // 确保路径正确
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' }
    ],
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1
    },
    robots: {
        index: true,
        follow: true
    }
};
