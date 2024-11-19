import BaseLayout from './baseLayout';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import CountryFlag from '../components/countryFlag';
import HeaderWC from '../components/wordlCup/header';
import ResumenWC from '../components/wordlCup/resumen';
import AnalisisCWC from '../components/wordlCup/analisisC';
import AnalisisEWC from '../components/wordlCup/analisisE';
import AnalisisPWC from '../components/wordlCup/analisisP';

const WorldCupLayout = ({ children, pageName, countryId, worldCId }) => {
    return (
        <BaseLayout pageName={pageName}>
            <Link
                to={'/mundiales'}
                className='dark:text-gray-400 text-gray-700 flex items-center gap-2 m-4'
            >
                <FaArrowAltCircleLeft />
                Volver
            </Link>
            <div className='my-4 ml-2'>
                <CountryFlag countryId={countryId} />
            </div>
            <HeaderWC worldCId={worldCId} />
            <ResumenWC worldCId={worldCId} />
            <AnalisisCWC worldCId={worldCId} />
            <AnalisisEWC worldCIp={worldCId} />
            <AnalisisPWC worldCId={worldCId} />
            {children}  
        </BaseLayout>
    );
};

export default WorldCupLayout;
