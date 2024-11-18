import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { DarkThemeToggle } from 'flowbite-react';
import routesConfig from '../routes/routes';

const Menu = ({ pageName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <h1 className='self-center text-2xl font-bold whitespace-nowrap dark:text-white'>
                            {pageName}
                        </h1>
                    </div>
                    {/* Menú de navegación en pantalla grande */}
                    <div className='hidden md:flex space-x-4'>
                        <MenuList></MenuList>
                    </div>
                    {/* Botón para menú responsive en dispositivos móviles */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='focus:outline-none flex gap'
                        >
                            {isOpen ? (
                                <FaTimes className='h-6 w-6 text-black dark:text-white' />
                            ) : (
                                <FaBars className='h-6 w-6 text-black dark:text-white' />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Menú desplegable en dispositivos móviles */}
            {isOpen && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <MenuList addClass={'block'}></MenuList>
                    </div>
                </div>
            )}
        </nav>
    );
};

const MenuList = ({ addClass }) => {
    return (
        <>
            <MenuLink href={'/'} to={'Inicio'} addClass={addClass}>Inicio</MenuLink>
            <MenuLink href={'/mundiales'} to={'Mundiales'} addClass={addClass}>Mundiales</MenuLink>
            <DarkThemeToggle />
        </>
    );
};

const MenuLink = ({ href, addClass, to }) => {
    return (
        <>
            <Link
                to={href}
                className={`hover:bg-gray-200 text-black dark:hover:bg-gray-700 dark:text-white px-3 py-2 rounded ${addClass}`}
            >
                {to}
            </Link>
        </>
    );
};

export default Menu;
