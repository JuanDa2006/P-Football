import countries from '../../data/countries';
import { IoMdStar } from 'react-icons/io';
import { MdOutlineStadium } from 'react-icons/md';
import { BsCalendar3 } from 'react-icons/bs';
import CountryFlagSmall from '../countryFlagSmall';

const SelMatch = ({
    partido,
    fase,
    mejor_jugador,
    puntuacion,
    nacion,
    estadio,
    fecha,
    seleccion_1,
    seleccion_2,
    sel_1_score,
    sel_2_score,
    children,
}) => {
    const sel_1 = countries.find((c) => c.id === seleccion_1);
    const sel_2 = countries.find((c) => c.id === seleccion_2);

    const getColorClass = (puntuacion) => {
        if (puntuacion >= 8) return 'bg-green-400';
        if (puntuacion >= 5) return 'bg-yellow-300';
        return 'bg-red-500';
    };

    return (
        <div className='max-w-80 w-80 md:w-96 md:max-w-96 flex flex-wrap justify-between gap-4 dark:text-white mb-8'>
            <div className='w-full'>
                <h1 className='font-bold text-2xl uppercase'>{partido}</h1>
                <h1>{fase}</h1>
            </div>
            <div className='w-full bg-gradient-to-r from-blue-950 to-indigo-900 rounded-xl p-4'>
                <h2 className='font-light text-white'>Jugador del partido:</h2>
                <p className='font-semibold text-2xl text-white mb-2'>
                    {mejor_jugador}
                </p>
                <div className='flex w-16 justify-between items-center'>
                    <div
                        className={`flex justify-between items-center gap-2 text-white py-1 px-3 rounded-lg ${getColorClass(
                            puntuacion
                        )}`}
                    >
                        <p>{puntuacion}</p>
                        <IoMdStar />
                    </div>
                </div>
                <div className='mt-4 ml-2'>
                    <CountryFlagSmall countryId={nacion} />
                </div>
            </div>
            <div className='flex justify-between items-center w-full flex-nowrap'>
                <div className='w-1/2 flex items-center justify-start gap-2'>
                    <MdOutlineStadium />
                    <p>{estadio}</p>
                </div>
                <div>
                    <p>|</p>
                </div>
                <div className='w-1/2 flex items-center justify-end gap-2'>
                    <p>{fecha}</p>
                    <BsCalendar3 />
                </div>
            </div>
            <div className='flex justify-between gap-4 w-full items-center'>
                <div className='flex flex-wrap justify-center w-1/3'>
                    <img src={sel_1.src} alt='' className='w-full' />
                </div>
                <div className='w-1/3 flex justify-center items-center flex-wrap'>
                    <p className='font-bold text-4xl w-full text-center'>
                        {sel_1_score} - {sel_2_score}
                    </p>
                </div>
                <div className='flex flex-wrap justify-center w-1/3'>
                    <img src={sel_2.src} alt='' className='w-full' />
                </div>
            </div>
            <div className='flex justify-between gap-4 w-full items-center'>
                <div className='flex flex-wrap justify-center w-1/3'>
                    <h2>{sel_1.name}</h2>
                </div>
                <div className='w-1/3'></div>
                <div className='flex flex-wrap justify-center w-1/3'>
                    <h2>{sel_2.name}</h2>
                </div>
            </div>
            {children}
        </div>
    );
};

export default SelMatch;
