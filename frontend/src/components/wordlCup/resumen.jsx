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
                        <ul className='-ml-10 flex flex-wrap justify-between'>
                            {mundial.selecciones.map((grupos, index) => (
                                <div key={index}>
                                    <h3>
                                        <span className='font-bold'>
                                            Grupo:{' '}
                                        </span>
                                        {grupos.grupo}
                                    </h3>
                                    <table className='border-colapse border border-slate-600'>
                                        <thead>
                                            <tr>
                                                <th className='w-48 text-center border-colapse border border-slate-600'>
                                                    Equipo
                                                </th>
                                                <th className='w-20 text-center border-colapse border border-slate-600'>
                                                    Puntos
                                                </th>
                                                <th className='w-8 text-center border-colapse border border-slate-600'>
                                                    PJ
                                                </th>
                                                <th className='w-8 text-center border-colapse border border-slate-600'>
                                                    PG
                                                </th>
                                                <th className='w-8 text-center border-colapse border border-slate-600'>
                                                    PE
                                                </th>
                                                <th className='w-8 text-center border-colapse border border-slate-600'>
                                                    PP
                                                </th>
                                                <th className='w-8 text-center border-colapse border border-slate-600'>
                                                    GF
                                                </th>
                                                <th className='w-8 text-center border-colapse border border-slate-600'>
                                                    GC
                                                </th>
                                                <th className='w-8 text-center border-colapse border border-slate-600'>
                                                    DG
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
                                                            {equipo.golesFavor}
                                                        </td>
                                                        <td className='pl-2 border-collapse border border-slate-600'>
                                                            {equipo.golesContra}
                                                        </td>
                                                        <td className='pl-2 border-collapse border border-slate-600'>
                                                            {
                                                                equipo.diferenciaGoles
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            )}
                                        </tbody>
                                    </table>
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
