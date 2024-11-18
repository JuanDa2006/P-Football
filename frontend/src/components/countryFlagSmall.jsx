import countries from '../data/countries';
import { Avatar } from 'flowbite-react';

const CountryFlagSmall = ({ countryId }) => {
    const country = countries.find((c) => c.id === countryId);

    return (
        <div>
            {country ? <Flag countryId={countryId} /> : <Avatar rounded />}
        </div>
    );
};

const Flag = ({ countryId }) => {
    const country = countries.find((c) => c.id === countryId);

    return (
        <div className='sm:h-8 h-10 w-auto overflow-hidden inline'>
            <img
                src={country.src}
                alt={country.name}
                className='sm:h-4 h-6 w-auto rounded sm:rounded-sm mr-4 '
            />
        </div>
    );
};

export default CountryFlagSmall;