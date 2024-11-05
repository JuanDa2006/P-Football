import countries from '../data/countries';
import { Card } from 'flowbite-react';

export default function TestComponent() {
    return (
        <>
            <CountryList />
        </>
    );
}

const CountryList = () => {
    const list = countries.map((country) => {
        return <CountryCard countryId={country.id} />;
    });

    return (
        <div className='flow-root'>
            <div className='flex flex-wrap justify-center'>{list}</div>
        </div>
    );
};

const CountryCard = ({ countryId }) => {
    const country = countries.find((c) => c.id === countryId);

    return (
        <div>
            {country ? (
                <Card className='w-96 m-8'>
                    <img
                        src={country.src}
                        alt={country.name}
                        className='rounded-md'
                    />
                    <h1>{country.name}</h1>
                </Card>
            ) : (
                <Card className='w-96'>
                    <h1>No encontrado</h1>
                </Card>
            )}
        </div>
    );
};
