import WorldCupLayout from '../../layouts/worldCupLayout';
import ResumenWC from '../../components/wordlCup/resumen';

export default function URU_1930() {
    return (
        <WorldCupLayout pageName={'Uruguay - 1930'} countryId={'URU'}>
            <p className='dark:text-white'>
                El primer Mundial de la FIFA se jugó en 1930 en Uruguay.
            </p>
            <ResumenWC worldCId={'1930'} />
        </WorldCupLayout>
    );
}
