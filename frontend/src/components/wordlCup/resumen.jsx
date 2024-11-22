import resumen_wc from '../../data/worldCP/WC-resumen';
import { IoCheckmark } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import CountryName from '../countryName';

export default function ResumenWC({ worldCId, hostId }) {
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
                        <span className='font-semibold'>
                            Selecciones participantes y grupos:
                        </span>
                        <ul className='-ml-10 flex flex-col gap-4'>
                            {mundial.selecciones.map((grupos, index) => (
                                <div key={index} className=''>
                                    <h3>
                                        <span className='font-bold'>
                                            Grupo:{' '}
                                        </span>
                                        {grupos.grupo}
                                    </h3>
                                    <div className='overflow-x-auto'>
                                        <table className='min-w-full border-colapse border border-slate-600'>
                                            <thead>
                                                <tr>
                                                    <th className='min-w-48 w-48 text-center border-colapse border border-slate-600'>
                                                        Equipo
                                                    </th>
                                                    <th className='min-w-20 w-20 text-center border-colapse border border-slate-600'>
                                                        Puntos
                                                    </th>
                                                    <th className='min-w-8 w-8 text-center border-colapse border border-slate-600'>
                                                        PJ
                                                    </th>
                                                    <th className='min-w-8 w-8 text-center border-colapse border border-slate-600'>
                                                        PG
                                                    </th>
                                                    <th className='min-w-8 w-8 text-center border-colapse border border-slate-600'>
                                                        PE
                                                    </th>
                                                    <th className='min-w-8 w-8 text-center border-colapse border border-slate-600'>
                                                        PP
                                                    </th>
                                                    <th className='min-w-8 w-8 text-center border-colapse border border-slate-600'>
                                                        GF
                                                    </th>
                                                    <th className='min-w-8 w-8 text-center border-colapse border border-slate-600'>
                                                        GC
                                                    </th>
                                                    <th className='min-w-8 w-8 text-center border-colapse border border-slate-600'>
                                                        DG
                                                    </th>
                                                    <th className='min-w-8 w-8 text-center border-colapse border border-slate-600'>
                                                        Pasa
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {grupos.paises.map(
                                                    (equipo, idx) => (
                                                        <tr key={idx}>
                                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                                <CountryName
                                                                    countryId={
                                                                        equipo.nombre
                                                                    }
                                                                />
                                                            </td>
                                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                                {equipo.puntos}
                                                            </td>
                                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                                {
                                                                    equipo.partidosJugados
                                                                }
                                                            </td>
                                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                                {
                                                                    equipo.partidosGanados
                                                                }
                                                            </td>
                                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                                {
                                                                    equipo.partidosEmpatados
                                                                }
                                                            </td>
                                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                                {
                                                                    equipo.partidosPerdidos
                                                                }
                                                            </td>
                                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                                {
                                                                    equipo.golesFavor
                                                                }
                                                            </td>
                                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                                {
                                                                    equipo.golesContra
                                                                }
                                                            </td>
                                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                                {equipo.diferenciaGoles >= 0 ? (
                                                                    <span>{equipo.diferenciaGoles}</span>
                                                                ) : (
                                                                    <span className='text-red-500'>{equipo.diferenciaGoles}</span>
                                                                )}
                                                            </td>
                                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                                {equipo.pasa ? (
                                                                    <IoCheckmark className='text-green-500' />
                                                                ) : (
                                                                    <IoCloseSharp className='text-red-500 font-black' />
                                                                )}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </ul>
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
