import { seoConfig } from '@/config/seo.config';
import { Metadata } from 'next';
import HomePage from './(commonLayout)/home/page';

export const metadata: Metadata = {
    title: seoConfig.title.default,
    description: seoConfig.description,
    openGraph: {
        ...seoConfig.openGraph,
        title: 'Home - ' + seoConfig.title.default,
    },
    twitter: {
        ...seoConfig.twitter,
        title: 'Home - ' + seoConfig.title.default,
    },
};

const Home = async () => {
    return (
        <HomePage />
    );
};

export default Home;