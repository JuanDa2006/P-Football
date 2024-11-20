import analisis_areas_wc from '../../data/worldCP/WC-analisis-areas';

export default function AnalisisAWC({ worldCId }) {
    const mundial = analisis_areas_wc.find((c) => c.id === worldCId);

    return (
        <div className='my-4 dark:text-white'>
            <h3 className='font-semibold text-xl'>Análisis por Areas:</h3>
        </div>
    );
}
