import BaseLayout from '../layouts/baseLayout';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export default function ErrorPage() {
    return (
        <BaseLayout pageName={'Página no encontrada'}>
            <Link
                to={'/'}
                className='dark:text-gray-400 text-gray-700 flex items-center gap-2 m-4'
            >
                <FaArrowAltCircleLeft />
                Inicio
            </Link>
        </BaseLayout>
    );
}
