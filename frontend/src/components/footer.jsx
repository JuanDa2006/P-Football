import { Footer, FooterCopyright } from 'flowbite-react';

export default function FooterComp() {
    return (
        <>
            <footer className='absolute bottom-0 w-screen flex items-center h-16'>
                <Footer className='h-16 m-4'>
                    <FooterCopyright
                        href='/'
                        by='David Salgado'
                        year={2024}
                        className='ml-4'
                    />
                </Footer>
            </footer>
        </>
    );
}
