'use client';

import React from 'react';
import HeaderView from '.';

export default function HeaderSet() {
    const [section, setSection] = React.useState('/');

    const links = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Platform', href: '/platform' },
        // { label: 'Technology', href: '/technology' },
        // { label: 'Gallery', href: '/gallery' },
        { label: 'Contact', href: '/contact' }
    ];
    return (
        <>
            <HeaderView
                {...{
                    title: 'AIMUN',
                    links,
                    section,
                    setSection
                }}
            />
        </>
    );
}
