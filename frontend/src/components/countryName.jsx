import countries from '../data/countries';
import CountryFlagSmall from './countryFlagSmall';

const CountryName = ({ countryId }) => {
    const country = countries.find((c) => c.id == countryId);

    if (!country) {
        return <p>No existe</p>;
    }
    return (
        <span className='my-2 flex items-center gap-0.5 flex-wrap'>
            <CountryFlagSmall countryId={country.id} />
            {country.name}
        </span>
    );
};

export default CountryName;
