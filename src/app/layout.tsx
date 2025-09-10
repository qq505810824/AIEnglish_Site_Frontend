import Topbar from '@/app/components/base/topbar';
import BrowerInitor from '@/app/components/browser-initor';
import I18NServer from '@/app/components/i18n-server';
import SentryInitor from '@/app/components/sentry-initor';
import { OrganizationJsonLd, SoftwareAppJsonLd, WebSiteJsonLd } from '@/components/JsonLd';
import { seoConfig } from '@/config/seo.config';
import { AlertProvider } from '@/context/AlertContext';
import { AppContextProvider } from '@/context/app-context';
import { EventEmitterContextProvider } from '@/context/event-emitter';
import { LoadProvider } from '@/context/LoadContext';
import { ModalContextProvider } from '@/context/modal-context';
import { getLocaleOnServer } from '@/i18n/server';
import type { Viewport } from 'next';
import { Metadata } from 'next';
import Footer from './components/Footer';
import HeaderSet from './components/Header/HeaderSet';
import SwrInitor from './components/swr-initor';
import './styles/globals.css';
import './styles/markdown.scss';

export const metadata: Metadata = {
    ...seoConfig,
    title: seoConfig.title.default,
};

export const viewport: Viewport = seoConfig.viewport;

const LocaleLayout = ({ children }: { children: React.ReactNode }) => {
    const locale = getLocaleOnServer();

    return (
        <html lang={locale ?? 'en'} className="h-full">
            <head>
                <meta name="theme-color" content="#FFFFFF" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                {/* 结构化数据 */}
                <WebSiteJsonLd />
                <OrganizationJsonLd />
                <SoftwareAppJsonLd />
            </head>
            <body className="h-full select-auto">
                <Topbar />
                <BrowerInitor>
                    <SentryInitor>
                        {/* @ts-expect-error Async Server Component */}
                        <I18NServer locale={locale}>
                            <SwrInitor>
                                <AppContextProvider>
                                    <EventEmitterContextProvider>
                                        <AlertProvider>
                                            <LoadProvider>
                                                <ModalContextProvider>
                                                    <HeaderSet />
                                                    <div className="flex flex-col   items-center w-full  ">
                                                        <div className="max-w-7xl  from-white to-gray-50 text-gray-900">
                                                            {children}
                                                        </div>
                                                    </div>
                                                    <Footer />
                                                </ModalContextProvider>
                                            </LoadProvider>
                                        </AlertProvider>
                                    </EventEmitterContextProvider>
                                </AppContextProvider>
                            </SwrInitor>
                        </I18NServer>
                    </SentryInitor>
                </BrowerInitor>
            </body>
        </html>
    );
};

export default LocaleLayout;