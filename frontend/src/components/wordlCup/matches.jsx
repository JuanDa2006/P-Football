import SelMatch from '../matches/selMatchs';
import analisis_partidos_wc from '../../data/worldCP/WC-analisis-partidos';
import { PiSoccerBallFill } from 'react-icons/pi';
import CountryFlagSmall from '../countryFlagSmall';
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
                <div className='flex flex-wrap justify-start'>
                    {partido.eventos.length > 0 ? (
                        <ul className='w-full'>
                            {partido.eventos.map((evento, index) => (
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

const YellowCard = ({ nacion, evento, minuto }) => {
    return (
        <li className='w-full flex items-center'>
            <div className='flex items-center'>
                <TbRectangleVerticalFilled />
                <p className='flex items-center ml-4'>
                    <CountryFlagSmall countryId={nacion} />
                    {evento} - {minuto}'{' '}
                </p>
            </div>
        </li>
    );
};

export default MatchWC;
