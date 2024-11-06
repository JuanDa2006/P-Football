import { Card } from 'flowbite-react';
import LoremSM from '../utils/loremSm';
import CountryFlag from './countryFlag';

export default function TestComponent() {
    return (
        <>
            <Card className='max-w-sm'>
                <div className='flex justify-between content-center w-full h-auto'>
                    <h5 className='text-2xl font-bold text-black dark:text-white'>Card</h5>
                    <CountryFlag countryId={'COL'} />
                </div>
                <LoremSM />
            </Card>
        </>
    );
}
