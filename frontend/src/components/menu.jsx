import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-gray-800 dark:bg-gray-900 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-bold'>Mi Sitio</h1>
                    </div>
                    {/* Menú de navegación en pantalla grande */}
                    <div className='hidden md:flex space-x-4'>
                        <Link
                            to='/'
                            className='hover:bg-gray-700 px-3 py-2 rounded'
                        >
                            Home
                        </Link>
                        <Link
                            to='/test'
                            className='hover:bg-gray-700 px-3 py-2 rounded'
                        >
                            Test
                        </Link>
                    </div>
                    {/* Botón para menú responsive en dispositivos móviles */}
                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='focus:outline-none'
                        >
                            {isOpen ? (
                                <FaTimes className='h-6 w-6 text-white' />
                            ) : (
                                <FaBars className='h-6 w-6 text-white' />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Menú desplegable en dispositivos móviles */}
            {isOpen && (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <Link
                            to='/'
                            className='block hover:bg-gray-700 px-3 py-2 rounded'
                        >
                            Inicio
                        </Link>
                        <Link
                            to='/test'
                            className='block hover:bg-gray-700 px-3 py-2 rounded'
                        >
                            Test
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Menu;
