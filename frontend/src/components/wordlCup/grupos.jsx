import resumen_wc from '../../data/worldCP/WC-resumen';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import CountryName from '../countryName';

export default function GruposWC({ worldCId }) {
    const mundial = resumen_wc.find((c) => c.id === worldCId);

    return (
        <div className='my-4 dark:text-white'>
            <h3 className='font-semibold text-xl'>
                Selecciones participantes y grupos:
            </h3>
            <div className='flex flex-wrap justify-between'>
                {mundial.selecciones.map((grupo, index) => (
                    <div key={index}>
                        <h3 className='text-lg'>
                            <span className='font-medium'>Grupo: </span>
                            {grupo.grupo}
                        </h3>
                        <div>
                            <table className='min-w-full border-colapse border border-slate-600'>
                                <thead>
                                    <tr>
                                        <th className='min-w-8 w-8 text-center border-colapse border border-slate-600'>
                                            {' '}
                                        </th>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {grupo.paises.map((equipo, idx) => (
                                        <tr key={idx}>
                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                {equipo.pasa ? (
                                                    <IoCheckmarkCircleSharp className='text-green-500 ' />
                                                ) : (
                                                    <IoCloseCircleSharp className='text-red-500 font-black' />
                                                )}
                                            </td>
                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                <CountryName
                                                    countryId={equipo.nombre}
                                                />
                                            </td>
                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                {equipo.puntos}
                                            </td>
                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                {equipo.partidosJugados}
                                            </td>
                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                {equipo.partidosGanados}
                                            </td>
                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                {equipo.partidosEmpatados}
                                            </td>
                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                {equipo.partidosPerdidos}
                                            </td>
                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                {equipo.golesFavor}
                                            </td>
                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                {equipo.golesContra}
                                            </td>
                                            <td className='pl-2 border-collapse border border-slate-600'>
                                                {equipo.diferenciaGoles >= 0 ? (
                                                    <span>
                                                        {equipo.diferenciaGoles}
                                                    </span>
                                                ) : (
                                                    <span className='text-red-500'>
                                                        {equipo.diferenciaGoles}
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
