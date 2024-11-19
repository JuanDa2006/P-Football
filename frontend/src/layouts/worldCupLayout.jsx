import BaseLayout from './baseLayout';
import CountryFlag from '../components/countryFlag';
import HeaderWC from '../components/wordlCup/header';
import ResumenWC from '../components/wordlCup/resumen';
import AnalisisCWC from '../components/wordlCup/analisisC';
import AnalisisEWC from '../components/wordlCup/analisisE';
import AnalisisPWC from '../components/wordlCup/analisisP';

const WorldCupLayout = ({ children, pageName, countryId, worldCId }) => {
    return (
        <BaseLayout pageName={pageName}>
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
