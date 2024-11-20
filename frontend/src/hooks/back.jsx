import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const GoBack = () => {
    const navigate = useNavigate();

    return (
        <Link
            onClick={() => navigate(-1)}
            className='dark:text-gray-400 text-gray-700 flex items-center justify-center gap-2 m-4 w-20'
        >
            <FaArrowAltCircleLeft />
            Vovler
        </Link>
    );
};

export default GoBack;
