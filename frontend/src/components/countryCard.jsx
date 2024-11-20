import countries from '../data/countries';
import { Card } from 'flowbite-react';

const CountryCard = ({ countryId, text }) => {
    const country = countries.find((c) => c.id === countryId);

    return (
        <div>
            {country ? (
                <Card className='w-80'>
                    <img
                        src={country.src}
                        alt={country.name}
                        className='rounded-md'
                    />
                    <h1 className='text-2xl dark:text-white'>
                        <span className='font-bold'>{text}</span>
                        {country.name}
                    </h1>
                </Card>
            ) : (
                <Card className='w-96'>
                    <h1>No encontrado</h1>
                </Card>
            )}
        </div>
    );
};

export default CountryCard;
