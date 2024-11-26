import SelMatch from '../matches/selMatchs';
import analisis_partidos_wc from '../../data/worldCP/WC-analisis-partidos';
import { PiSoccerBallFill } from 'react-icons/pi';
import CountryFlagSmall from '../countryFlagSmall';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';
import { TbRectangleVerticalFilled } from 'react-icons/tb';

const MatchWC = ({ worldCId, matchId }) => {
    const mundial = analisis_partidos_wc.find((c) => c.id === worldCId);
    if (!mundial) {
        return <p>No se encontro partido. {}</p>;
    }

    const partido = mundial.partidos.find((c) => c.id === matchId);

    return (
        <SelMatch
            partido={partido.partido}
            mejor_jugador={partido.mejor_jugador}
            nacion={partido.nacion}
            puntuacion={partido.puntuacion}
            estadio={partido.estadio}
            fecha={partido.fecha}
            seleccion_1={partido.sel_1}
            seleccion_2={partido.sel_2}
            sel_1_score={partido.sel_1_scroe}
            sel_2_score={partido.sel_2_scrore}
        >
            <div className='flex justify-between gap-4 w-full'>
                <div className='flex flex-wrap justify-start w-full'>
                    {partido.goles.length > 0 ? (
                        <ul className='w-full'>
                            {partido.goles.map((evento, index) => (
                                <div key={index}>
                                    {
                                        (evento.type = 'gol' ? (
                                            <Gol
                                                nacion={evento.nacion}
                                                evento={evento.jugador}
                                                minuto={evento.minuto}
                                            />
                                        ) : null)
                                    }
                                </div>
                            ))}
                        </ul>
                    ) : null}
                    {partido.penales?.length > 0 ? (
                        <div className='w-full'>
                            <hr className='w-full mt-3 ' />
                            <h3 className='mt-2 mb-2 ml-4 font-semibold'>
                                Penales
                            </h3>
                            <div className='flex'>
                                <div className='flex flex-col justify-end w-1/2'>
                                    <div className='w-full flex justify-start mb-4'>
                                        <CountryFlagSmall
                                            countryId={partido.sel_2}
                                        />
                                    </div>
                                    <ul>
                                        {partido.penales
                                            .filter(
                                                (penal) =>
                                                    penal.nacion ===
                                                    partido.sel_2
                                            )
                                            .map((penal, index) => (
                                                <li
                                                    className='flex items-center'
                                                    key={index}
                                                >
                                                    <span className='mr-2'>
                                                        {penal.anoto ? (
                                                            <IoCheckmarkCircleSharp className='text-green-500 ' />
                                                        ) : (
                                                            <IoCloseCircleSharp className='text-red-500 font-black' />
                                                        )}
                                                    </span>
                                                    {penal.jugador}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                                <div className='flex flex-col w-1/2'>
                                    <div className='w-full flex justify-end mb-4'>
                                        <CountryFlagSmall
                                            countryId={partido.sel_1}
                                        />
                                    </div>
                                    <ul>
                                        {partido.penales
                                            .filter(
                                                (penal) =>
                                                    penal.nacion ===
                                                    partido.sel_1
                                            )
                                            .map((penal, index) => (
                                                <li
                                                    className='flex items-center justify-end'
                                                    key={index}
                                                >
                                                    {penal.jugador}
                                                    <span className='ml-2'>
                                                        {penal.anoto ? (
                                                            <IoCheckmarkCircleSharp className='text-green-500 ' />
                                                        ) : (
                                                            <IoCloseCircleSharp className='text-red-500 font-black' />
                                                        )}
                                                    </span>
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </SelMatch>
    );
};

const Gol = ({ nacion, evento, minuto }) => {
    return (
        <li className='w-full flex items-center'>
            <div className='flex items-center'>
                <PiSoccerBallFill />
                <p className='flex items-center ml-4'>
                    <CountryFlagSmall countryId={nacion} />
                    {evento} - {minuto}'{' '}
                </p>
            </div>
        </li>
    );
};

export default MatchWC;
