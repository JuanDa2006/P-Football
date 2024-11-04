import React from 'react';
import Menu from '../components/menu';
import PageTitle from '../utils/pageTitle';
import { Footer, FooterCopyright } from 'flowbite-react';

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
            <footer className='absolute bottom-0 w-screen flex items-center h-16'>
                <Footer className='h-16'>
                    <FooterCopyright href='/' by='David Salgado' year={2024} className='ml-4' />
                </Footer> 
            </footer>
        </>
    );
};

export default BaseLayout;
