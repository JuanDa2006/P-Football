import resumen_wc from '../../data/worldCP/WC-resumen';
import CountryFlagSmall from '../countryFlagSmall';

export default function ResumenWC({ worldCId }) {
    const mundial = resumen_wc.find((c) => c.id === worldCId);

    return (
        <div className='my-4 dark:text-white'>
            <h3 className='font-semibold text-xl'>Resumen</h3>
            <ul className='list-disc pl-8 ml-2'>
                <li className=''>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Anfitrión: </span>
                        <span className='flex items-center'>
                            <CountryFlagSmall countryId={mundial.anfitrion.id} />
                            {mundial.anfitrion.nombre}
                        </span>
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
                        <span className='flex items-center'>
                            <CountryFlagSmall countryId={mundial.puesto_1.id} />
                            {mundial.puesto_1.name}
                        </span>
                    </p>
                </li>
                <li>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Puesto 2: </span>
                        <span className='flex items-center'>
                            <CountryFlagSmall countryId={mundial.puesto_2.id} />
                            {mundial.puesto_2.name}
                        </span>
                    </p>
                </li>
                <li>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Puesto 3: </span>
                        <span className='flex items-center'>
                            <CountryFlagSmall countryId={mundial.puesto_3.id} />
                            {mundial.puesto_3.name}
                        </span>
                    </p>
                </li>
                <li>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Puesto 4: </span>
                        <span className='flex items-center'>
                            <CountryFlagSmall countryId={mundial.puesto_4.id} />
                            {mundial.puesto_4.name}
                        </span>
                    </p>
                </li>
            </ul>
        </div>
    );
}
