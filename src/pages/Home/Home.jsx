import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div className='w-[1400px] mx-auto'>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Banner></Banner>
                <Doctors></Doctors>
            </Suspense>
        </div>
    );
};

export default Home;