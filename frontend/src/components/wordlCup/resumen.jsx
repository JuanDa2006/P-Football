import resumen_wc from '../../data/worldCP/WC-resumen';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import CountryName from '../countryName';
import { Link } from 'react-router-dom';

export default function ResumenWC({ worldCId }) {
    const mundial = resumen_wc.find((c) => c.id === worldCId);

    return (
        <div className='my-4 dark:text-white'>
            <h3 className='font-semibold text-xl'>Resumen</h3>
            <ul className='list-disc pl-8 ml-2'>
                <li className=''>
                    <p className='flex items-center gap-4'>
                        {mundial.anfitriones.length > 1 ? (
                            <span className='font-semibold'>Anfitriones: </span>
                        ) : (
                            <span className='font-semibold'>Anfitrión: </span>
                        )}
                        {mundial.anfitriones.map((anfitiron) => (
                            <div>
                                <CountryName countryId={anfitiron.id} />
                            </div>
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
                        <Link to={mundial.grupos} className='font-semibold hover:underline'>
                            Selecciones participantes y grupos (click):
                        </Link>
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
                        <CountryName countryId={mundial.podio.puesto_1} />
                    </p>
                </li>
                <li>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Puesto 2: </span>
                        <CountryName countryId={mundial.podio.puesto_2} />
                    </p>
                </li>
                <li>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Puesto 3: </span>
                        <CountryName countryId={mundial.podio.puesto_3} />
                    </p>
                </li>
                <li>
                    <p className='flex items-center gap-4'>
                        <span className='font-semibold'>Puesto 4: </span>
                        <CountryName countryId={mundial.podio.puesto_4} />
                    </p>
                </li>
            </ul>
        </div>
    );
}
