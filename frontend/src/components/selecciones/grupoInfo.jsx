import countries from '../../data/countries';

const SeleccionGrupoInfo = ({
    countryId,
    puntos,
    partidosJugados,
    partidosGanados,
    partidosEmpatados,
    partidosPerdidos,
    golesFavor,
    golesContra,
    pasa,
}) => {
    const country = countries.find((c) => c.id === countryId);

    return (
        <div className='w-96 max-w-sm p-2 shadow-lg rounded-xl flex flex-wrap gap-4 dark:text-white bg-slate-500 dark:bg-slate-700 flex-col'>
            <h1 className='font-semibold text-4xl text-center'>
                {country.name}
            </h1>
            <img
                src={country.src}
                alt={country.name}
                className='w-full h-auto'
            />
            <h3 className='text-xl font-bold'>Redmimiento: </h3>
            <ul className='list-disc pl-8'>
                <li>
                    <span className='font-medium'>Puntos: </span>
                    {puntos}
                </li>
                <li>
                    <span className='font-medium'>Partidos jugados: </span>
                    {partidosJugados}
                </li>
                <li>
                    <span className='font-medium'>Partidos ganados: </span>
                    {partidosGanados}
                </li>
                <li>
                    <span className='font-medium'>Partidos empatados: </span>
                    {partidosEmpatados}
                </li>
                <li>
                    <span className='font-medium'>Partidos perdidos: </span>
                    {partidosPerdidos}
                </li>
                <li>
                    <span className='font-medium'>Goles a favor: </span>
                    {golesFavor}
                </li>
                <li>
                    <span className='font-medium'>Goles en contra: </span>
                    {golesContra}
                </li>
            </ul>
        </div>
    );
};

export default SeleccionGrupoInfo;
