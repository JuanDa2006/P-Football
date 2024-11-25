import BaseLayout from './baseLayout';
import HeaderWC from '../components/wordlCup/header';
import ResumenWC from '../components/wordlCup/resumen';
import AnalisisCWC from '../components/wordlCup/analisisC';
import AnalisisEWC from '../components/wordlCup/analisisE';
import AnalisisAWC from '../components/wordlCup/analisisA';
import PartidosWC from '../components/wordlCup/analisisP';

const WorldCupLayout = ({
    children,
    pageName,
    countryId,
    hostId,
    worldCId,
    partidos,
}) => {
    return (
        <BaseLayout pageName={pageName}>
            <HeaderWC worldCId={worldCId} countryId={countryId} />
            <ResumenWC worldCId={worldCId} hostId={hostId} />
            <AnalisisCWC worldCId={worldCId} />
            <AnalisisEWC worldCIp={worldCId} />
            <AnalisisAWC worldCId={worldCId} />
            <PartidosWC worldCId={worldCId} partidos={partidos} />
            {children}
        </BaseLayout>
    );
};

export default WorldCupLayout;
