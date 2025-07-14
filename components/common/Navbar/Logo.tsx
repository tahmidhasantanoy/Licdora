import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={"/"} className='font-bold text-3xl '>Bulipe Exchange</Link>
        </div>
    );
};

export default Logo;