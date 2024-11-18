import analisis_estadistico_wc from '../../data/worldCP/WC-analisis-estadistico';

export default function AnalisisEWC({ worldCIp }) {
    const mundial = analisis_estadistico_wc.find((c) => c.id === worldCIp);

    return (
        <div className='my-4 dark:text-white'>
            <h3 className='font-semibold text-xl'>Análisis Estadístico:</h3>
            <ul className='list-disc pl-8'>
                <li>
                    <p>
                        <span className='font-semibold'>Goles marcados:</span>{' '}
                        {mundial.goles_marcados}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>Goles recibidos:</span>{' '}
                        {mundial.goles_recibidos}
                    </p>
                </li>
            </ul>
        </div>
    );
}
