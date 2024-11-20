import header_wc from '../../data/worldCP/WC-header';
import CountryFlag from '../../components/countryFlag';
import LoremSM from '../../utils/loremSm';
import CountryCard from '../countryCard';

export default function HeaderWC({ worldCId, countryId }) {
    const mundial = header_wc.find((c) => c.id === worldCId);

    return <CountryCard countryId={countryId} text={'Ganador: '} />;
}
