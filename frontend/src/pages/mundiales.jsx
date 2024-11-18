import { Link } from 'react-router-dom';
import BaseLayout from '../layouts/baseLayout';
import CountryFlagSmall from '../components/countryFlagSmall';
import mundiales from '../data/mundiales';

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
                    <ul>{listMundiales}  </ul>
                </div>
            </BaseLayout>
        </>
    );
}

const CountryLink = ({ to, countryId, countryName, year }) => {
    return (
        <li className='dark:text-white mb-2 '>
            <Link to={to} className='flex items-center gap-0.5'>
                <CountryFlagSmall countryId={countryId} />
                {year} - {countryName}
            </Link>
        </li>
    );
};

const listMundiales = mundiales.map((mundial) => {
    return (
        <CountryLink
            to={mundial.to}
            countryId={mundial.countryId}
            countryName={mundial.countryName}
            year={mundial.year}
        />
    );
});
