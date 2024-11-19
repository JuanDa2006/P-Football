import header_wc from '../../data/worldCP/WC-header';
import CountryFlag from '../../components/countryFlag';
import LoremSM from '../../utils/loremSm';

export default function HeaderWC({ worldCId, countryId }) {
    const mundial = header_wc.find((c) => c.id === worldCId);

    return (
        <div className='my-4 dark:text-white flex flex-col items-start justify-center gap-2 p-4 shadow-lg rounded'>
            <div className='flex items-center gap-2'>
                <CountryFlag countryId={countryId} />
                <h3 className='text-2xl'>
                    <span className='font-bold'>Ganador: </span>
                    {mundial.ganador}
                </h3>
            </div>
            <p className='text-lg'>{mundial.header}</p>
        </div>
    );
}
