import resumen_wc from '../../data/worldCP/WC-resumen';
import CountryFlagSmall from '../countryFlagSmall';
import CountryName from '../countryName';

export default function ResumenWC({ worldCId, hostId }) {
    const mundial = resumen_wc.find((c) => c.id === worldCId);

    return (
        <div className='my-4 dark:text-white'>
            <h3 className='font-semibold text-xl'>Resumen</h3>
            <ul className='list-disc pl-8 ml-2'>
                <li className=''>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Anfitrión: </span>
                        {mundial.anfitriones.map((anfitiron) => (
                            <CountryName countryId={anfitiron.id} />
                        ))}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>Fechas: </span>
                        {mundial.fechas}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>Estadios: </span>
                        {mundial.estadios}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>
                            Selecciones participantes:{' '}
                        </span>
                        {mundial.selecciones}
                    </p>
                </li>
                <li>
                    <p>
                        <span className='font-semibold'>Formato: </span>
                        {mundial.formato}
                    </p>
                </li>
                <li>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Puesto 1: </span>
                        <CountryName countryId={mundial.puesto_1.id} />
                    </p>
                </li>
                <li>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Puesto 2: </span>
                        <CountryName countryId={mundial.puesto_2.id} />
                    </p>
                </li>
                <li>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Puesto 3: </span>
                        <CountryName countryId={mundial.puesto_3.id} />
                    </p>
                </li>
                <li>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Puesto 4: </span>
                        <CountryName countryId={mundial.puesto_4.id} />
                    </p>
                </li>
            </ul>
        </div>
    );
}
