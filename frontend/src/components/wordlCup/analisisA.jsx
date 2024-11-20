import analisis_areas_wc from '../../data/worldCP/WC-analisis-areas';

export default function AnalisisAWC({ worldCId }) {
    const mundial = analisis_areas_wc.find((c) => c.id === worldCId);

    return (
        <div className='my-4 dark:text-white'>
            <h3 className='font-semibold text-xl'>Análisis por Areas:</h3>
            <ul className='list-disc pl-8 ml-2'>
                <li>
                    <p>
                        <span className='font-semibold'>Defensa:</span>{' '}
                        {mundial.defensa}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>Medio campo:</span>{' '}
                        {mundial.medio}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>Ataque:</span>{' '}
                        {mundial.ataque}
                    </p>
                </li>
            </ul>
        </div>
    );
}
