'use client';

import { seoConfig } from '@/config/seo.config';
import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo';

export function DefaultSEO() {
    return (
        <DefaultSeo
            title={seoConfig.title.default}
            description={seoConfig.description}
            openGraph={seoConfig.openGraph}
            twitter={seoConfig.twitter}
        />
    );
}

export interface SEOProps extends NextSeoProps {}

export function SEO({ ...props }: SEOProps) {
    return <NextSeo {...props} />;
}
