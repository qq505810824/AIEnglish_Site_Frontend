'use client';

import { SEO } from '@/components/SEO';

export default function ErrorPage() {
    return (
        <>
            <SEO
                title="Something Went Wrong - AI English"
                description="Sorry, something went wrong on our end. Please try again later."
                noindex={true}
                nofollow={true}
            />
            <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
                <p className="text-lg mb-8">Sorry, something went wrong on our end. Please try again later.</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-5 py-3 rounded-2xl inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 shadow"
                >
                    Try Again
                </button>
            </div>
        </>
    );
}