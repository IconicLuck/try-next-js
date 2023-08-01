'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'
import className from '@/utils/className';

const NavLink = ({ children, href, exact = false, activeClassName, ...props }) => {

    const path = usePathname()
    const active = exact ? path == href : path.startsWith(href)
    const classes = className(props.className, active && activeClassName)
    if (classes) {
        props.className = classes
    }

    return (
        <Link href={href}>
            {children}
        </Link>
    );
};

export default NavLink;