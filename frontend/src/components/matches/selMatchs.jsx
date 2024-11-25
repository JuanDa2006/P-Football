import countries from '../../data/countries';

const SelMatch = ({ seleccion_1, seleccion_2, sel_1_score, sel_2_score }) => {
    const sel_1 = countries.find((c) => c.id === seleccion_1);
    const sel_2 = countries.find((c) => c.id === seleccion_2);

    return (
        <div className='max-w-96 w-96 sm:w-full lg:w-max flex flex-wrap justify-between gap-4'>
            <div className='flex justify-between gap-4 w-full'>
                <div className='w-5/12 flex flex-warp flex-col justify-center align-middle'>
                    <img src={sel_1.src} alt='' className='w-full' />
                    <h1>{sel_1.name}</h1>
                </div>
                <div className='w-5/12 flex flex-warp flex-col justify-center align-middle'>
                    <img src={sel_2.src} alt='' className='w-full' />
                    <h1>{sel_2.name}</h1>
                </div>
            </div>
            <div className='w-full'>
                <p>{sel_1_score}</p>
                <p>{sel_2_score}</p>
            </div>
        </div>
    );
};

export default SelMatch;
