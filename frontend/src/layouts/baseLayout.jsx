import React from 'react';
import Menu from '../components/menu';
import PageTitle from '../utils/pageTitle';
import FooterComp from '../components/footer';

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
            {/* <FooterComp /> */}
        </>
    );
};

export default BaseLayout;
