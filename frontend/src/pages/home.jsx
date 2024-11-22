import { Link } from 'react-router-dom';
import BaseLayout from '../layouts/baseLayout';

export default function Home() {
    return (
        <>
            <BaseLayout pageName={'Inicio'}>
            <div className='dark:text-white'>
                <Link to={'/mundiales'}>Mundiales</Link>
                <br />
                <Link to={'/test'}>Test</Link>
            </div>
            </BaseLayout>
        </>
    );
}
