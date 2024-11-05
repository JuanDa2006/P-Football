import React from 'react';
import Menu from '../components/menu';
import PageTitle from '../services/pageTitle';
import FooterComp from '../components/footer';

const BaseLayout = ({ children, pageName }) => {
    return (
        <>
            <PageTitle title={pageName} />
            <header>
                <Menu pageName={pageName} />
            </header>
            <main className='w-screen pb-8'>
                <div className='px-8 pb-12 mt-12 mx-auto xl:max-w-screen-2xl'>
                    {children}
                </div>
            </main>
            {/* <FooterComp /> */}
        </>
    );
};

export default BaseLayout;
