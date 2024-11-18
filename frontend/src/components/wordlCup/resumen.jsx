import resumen_wc from '../../data/worldCP/WC-resumen';

export default function ResumenWC({ worldCId }) {
    const mundial = resumen_wc.find((c) => c.id === worldCId);

    return (
        <div className='resumen my-4 dark:text-white'>
            <h3 className='font-semibold text-xl'>Resumen</h3>
            <ul className='list-disc pl-8'>
                <li className=''>
                    <p>
                        <span className='font-semibold'>Lugar:</span> {mundial.lugar}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>Fechas:</span> {mundial.fechas}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>Estadios:</span> {mundial.estadios}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>Selecciones participantes:</span> {mundial.selecciones}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>Formato:</span> {mundial.formato}
                    </p>
                </li>
            </ul>
        </div>
    );
}
