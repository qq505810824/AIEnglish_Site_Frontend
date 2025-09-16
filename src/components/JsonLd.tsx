'use client';

import { siteConfig } from '@/config/seo.config';
import { JsonLd } from 'react-schemaorg';
import { Organization, SoftwareApplication, WebSite, WithContext } from 'schema-dts';

// 网站结构化数据
export function WebSiteJsonLd() {
    const webSiteData: WithContext<WebSite> = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${siteConfig.url}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
        } as any
    };

    return <JsonLd item={webSiteData} />;
}

// 组织结构化数据
export function OrganizationJsonLd() {
    // 由于没有社交媒体链接，我们创建一个简化版的组织结构化数据
    const organizationData: WithContext<Organization> = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url
        // 移除了sameAs属性，因为没有社交媒体链接
    };

    return <JsonLd item={organizationData} />;
}

// 软件应用结构化数据
export function SoftwareAppJsonLd() {
    const softwareAppData: WithContext<SoftwareApplication> = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        applicationCategory: 'Education',
        operatingSystem: 'Web',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
        }
    };

    return <JsonLd item={softwareAppData} />;
}
