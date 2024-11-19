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
                <div key={index} className='my-1 ml-2'>
                    <h4 className='text-lg font-semibold'>{partido.partido}:</h4>
                    <p>{partido.resumen}</p>
                    <h5 className='text-md font-medium ml-2 mt-2'>Goleadores: </h5>
                    <ul className='ml-4 mb-2'>
                        {partido.goleadores.map((goleador, idx) => (
                            <li key={idx} className='flex items-center my-1'>
                                <CountryFlagSmall countryId={goleador.nacion} />
                                {goleador.jugador} - {goleador.minuto}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AnalisisPWC;
