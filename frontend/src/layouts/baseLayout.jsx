import React from 'react';
import Menu from '../components/menu';
import PageTitle from '../services/pageTitle';
import FooterComp from '../components/footer';
import GoBack from '../hooks/back';
import ScrollToTop from 'react-scroll-to-top';
import { FaChevronUp } from 'react-icons/fa';

const BaseLayout = ({ children, pageName }) => {
    return (
        <>
            <PageTitle title={pageName} />
            <header>
                <Menu pageName={pageName} />
            </header>
            <ScrollToTop
                smooth
                component={<FaChevronUp />}
                className='flex items-center justify-center dark:text-white dark:bg-gray-800'
            />
            <main className='w-screen pb-8'>
                <div className='px-8 pb-12 mt-12 mx-auto xl:max-w-screen-2xl'>
                    <GoBack />
                    {children}
                </div>
            </main>
            {/* <FooterComp /> */}
        </>
    );
};

export default BaseLayout;
