"use client";

import NavLinks from './NavLinks';
import { leftMenus, rightMenus } from './menuLinks';
import Logo from './Logo';
import { useEffect, useState } from 'react';

const ClientNav = () => {
    const [horizontalDistance, setHorizontalDistance] = useState(0);

    useEffect(() => {
        const handleScrollEffect = () => {
            const scrollY = window.scrollY;
            setHorizontalDistance(scrollY);
        }

        handleScrollEffect()
        window.addEventListener("scroll", handleScrollEffect)

        return () => {
            window.removeEventListener("scroll",handleScrollEffect)
        }

    }, []);


    return (
        <nav className={`${horizontalDistance > 40 ? "bg-[#3b120f]" : "bg-transparent" } flex justify-between  p-5 fixed w-full top-0 z-50 items-center .transition-transform transition-all duration-700`}>
            <Logo />
            <NavLinks links={leftMenus} />
            <NavLinks links={rightMenus} />
        </nav>
    );
};

export default ClientNav;