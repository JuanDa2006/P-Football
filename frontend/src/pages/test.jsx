import BaseLayout from '../layouts/baseLayout';
import TestComponent from '../components/testComponent';

export default function Test() {
    return (
        <>
            <BaseLayout pageName={'Test'}>
                <TestComponent />
            </BaseLayout>
        </>
    );
}
