import BaseLayout from './baseLayout';
import HeaderWC from '../components/wordlCup/header';
import GruposWC from '../components/wordlCup/grupos';

const WorldCupGroupsLayout = ({ children, pageName, countryId, worldCId }) => {
    return (
        <BaseLayout pageName={pageName}>
            <HeaderWC worldCId={worldCId} countryId={countryId} />
            <GruposWC worldCId={worldCId} />
            {children}
        </BaseLayout>
    );
};

export default WorldCupGroupsLayout;
