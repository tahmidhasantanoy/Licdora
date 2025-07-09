import React from 'react';
interface IChildrenProps {
    children : React.ReactNode
}

const Containter = ({children} : IChildrenProps) => {
    return (
        <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-green-600'>
            {children}
        </div>
    );
};

export default Containter;