import countries from '../data/countries';

const CountryFlag = ({ countryId }) => {
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
        <div className='sm:h-8 h-10 w-auto overflow-hidden'>
            <img
                src={country.src}
                alt={country.name}
                className='sm:h-8 h-10 w-auto rounded '
            />
        </div>
    );
};

export default CountryFlag;
