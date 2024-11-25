import BaseLayout from './baseLayout';
import HeaderWC from '../components/wordlCup/header';
import MatchWC from '../components/wordlCup/matches';
import analisis_partidos_wc from '../data/worldCP/WC-analisis-partidos';

const WorldCupMatchLayout = ({
    children,
    pageName,
    countryId,
    worldCId,
    matchId,
}) => {
    const mundial = analisis_partidos_wc.find((c) => c.id === worldCId);

    return (
        <BaseLayout pageName={pageName}>
            <div className='flex flex-wrap justify-between gap-y-4'>
                {mundial.partidos.map((partido, index) => (
                    <div>
                        <MatchWC
                            key={index}
                            worldCId={worldCId}
                            matchId={partido.id}
                        />
                    </div>
                ))}
                {children}
            </div>
        </BaseLayout>
    );
};

export default WorldCupMatchLayout;
