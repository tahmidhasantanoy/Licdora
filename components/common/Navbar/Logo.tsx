import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={"/"} className='font-bold text-3xl text-gray-50/95'>Bulipe Exchange</Link>
        </div>
    );
};

export default Logo;