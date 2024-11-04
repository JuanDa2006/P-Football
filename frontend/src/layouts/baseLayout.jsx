import React from 'react';
import Menu from '../components/menu';
import PageTitle from '../utils/pageTitle';

const BaseLayout = ({ children, pageName }) => {
    return (
        <>
            <PageTitle title={pageName} />
            <header>
                <Menu pageName={pageName} />
            </header>
            <main className='w-screen'>
                <div className='px-8 mt-16 mx-auto xl:max-w-screen-2xl'>
                    {children}
                </div>
            </main>
            <footer className='absolute bottom-0 w-screen flex items-center h-16 bg-gray-100'>
                <p className='text-md mx-auto'>
                    Página creada por David Salgado
                </p>
            </footer>
        </>
    );
};

export default BaseLayout;
