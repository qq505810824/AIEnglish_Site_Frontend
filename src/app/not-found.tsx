import { SEO } from '@/components/SEO';

export default function NotFound() {
    return (
        <>
            <SEO
                title="Page Not Found - AI English"
                description="Sorry, the page you are looking for does not exist."
                noindex={true}
                nofollow={true}
            />
            <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
                <a
                    href="/"
                    className="px-5 py-3 rounded-2xl inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 shadow"
                >
                    Go back home
                </a>
            </div>
        </>
    );
}
