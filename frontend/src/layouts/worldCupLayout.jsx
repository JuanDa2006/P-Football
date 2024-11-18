import BaseLayout from './baseLayout';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import CountryFlag from '../components/countryFlag';

const WorldCupLayout = ({ children, pageName, countryId }) => {
    return (
        <BaseLayout pageName={pageName}>
            <Link
                to={'/mundiales'}
                className='dark:text-gray-400 text-gray-700 flex items-center gap-2 m-4'
            >
                <FaArrowAltCircleLeft />
                Volver
            </Link>
            <CountryFlag countryId={countryId} />
            {children}
        </BaseLayout>
    );
};

export default WorldCupLayout;
