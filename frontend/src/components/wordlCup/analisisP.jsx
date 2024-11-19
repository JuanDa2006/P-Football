import analisis_partidos_wc from '../../data/worldCP/WC-analisis-partidos';
import CountryFlagSmall from '../countryFlagSmall';

const AnalisisPWC = ({ worldCId }) => {
    const mundial = analisis_partidos_wc.find((c) => c.id === worldCId);

    if (!mundial) {
        return <p>No se encontro mundial. {}</p>;
    }

    return (
        <div className='my-4 dark:text-white'>
            <h3 className='font-semibold text-xl'>
                Análisis por Partido y Rendimiento:
            </h3>
            {mundial.partidos.map((partido, index) => (
                <div key={index} className='my-1'>
                    <h4 className='text-lg font-semibold'>{partido.partido}</h4>
                    <p>{partido.resumen}</p>
                    <h5>Goleadores: </h5>
                    <ul>
                        {partido.goleadores.map(((())))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AnalisisPWC;
