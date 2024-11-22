import { Link } from 'react-router-dom';
import BaseLayout from '../layouts/baseLayout';

export default function Home() {
    return (
        <>
            <BaseLayout pageName={'Inicio'}>
                <Link to={'/mundiales'}>Mundiales</Link>
                <br />
                <Link to={'/test'}>Test</Link>
            </BaseLayout>
        </>
    );
}
