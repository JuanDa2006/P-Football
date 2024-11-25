import { Link } from 'react-router-dom';
import analisis_partidos_wc from '../../data/worldCP/WC-analisis-partidos';
import CountryFlagSmall from '../countryFlagSmall';

const PartidosWC = ({ worldCId, partidos }) => {
    const mundial = analisis_partidos_wc.find((c) => c.id === worldCId);

    if (!mundial) {
        return <p>No se encontro mundial. {}</p>;
    }

    return (
        <div className='my-4 dark:text-white'>
            <Link to={partidos} className='font-semibold text-xl hover:underline'>
                Partidos (click)
            </Link>
        </div>
    );
};

export default PartidosWC;
