import { Link } from 'react-router-dom';
import BaseLayout from '../layouts/baseLayout';
import CountryFlagSmall from '../components/countryFlagSmall';

export default function Mundiales() {
    return (
        <>
            <BaseLayout pageName={'Mundiales'}>
                <p className='dark:text-white'>
                    En éste estudio, analizaremos cada selección ganadora de un
                    mundial.
                </p>
                <div>
                    <h2 className='my-4 font-bold text-xl dark:text-white   '>
                        Mundiales
                    </h2>
                    <ul>
                        <CountryLink
                            to={'/'}
                            countryId={'URU'}
                            countryName={'Uruguay'}
                            year={'1930'}
                        />
                    </ul>
                </div>
            </BaseLayout>
        </>
    );
}

const CountryLink = ({ to, countryId, countryName, year }) => {
    return (
        <li className='dark:text-white'>
            <Link to={to} className='flex items-center gap-2'>
                <CountryFlagSmall countryId={countryId} />
                {year} - {countryName}
            </Link>
        </li>
    );
};
