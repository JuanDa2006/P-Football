import countries from '../data/countries';

const CountryFlagSmall = ({ countryId }) => {
    const country = countries.find((c) => c.id === countryId);

    return (
        <div>
            {country ? <Flag countryId={countryId} /> : <p>No hay imagen</p>}
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
                className='md:h-4 h-6 w-auto rounded sm:rounded-sm mr-2 '
            />
        </div>
    );
};

export default CountryFlagSmall;
