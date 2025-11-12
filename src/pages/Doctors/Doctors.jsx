import React, { useContext } from 'react';
import { DoctorsContext } from '../../context/doctorsContext';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const {doctorsData}=useContext(DoctorsContext)
    console.log(doctorsData)

    if (doctorsData === null) {
        // Return a loading message or spinner while waiting for the fetch to complete
        return <span className="loading loading-bars loading-xl text-center"></span>;
    }

    return (
        <div className='p-5'>
            <div className='text-center mt-10'>
                <h1 className='text-4xl font-extrabold'>Our Best Doctors</h1>
                <p className='py-10 w-[700px] mx-auto'>Our platform connects you with verified, experienced doctors across various specialties all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you trust.</p>
            </div>
            <h1>{doctorsData.length}</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                
                {
                    doctorsData.map(doctor=><Doctor key={doctor.id} doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;