import React, { useContext, useEffect, useState } from 'react';
import { getLocalStorageData } from '../../context/localStorage';
import { DoctorsContext } from '../../context/doctorsContext';
import EachBooking from './EachBooking';
import { NavLink } from 'react-router';

const Bookings = () => {

    const [bookAppointment, setBookAppointment] = useState(null)
    const { doctorsData } = useContext(DoctorsContext)

    // const {handleAppointmentList,appointList}=useContext(DoctorsContext)



    useEffect(() => {
        const getlocal = getLocalStorageData()
        setBookAppointment(getlocal)
    }, [])

    console.log(bookAppointment)

    if (!doctorsData) {
        return <div>Loading details...</div>;
    }
    if (!bookAppointment) {
        return <div>Loading the list</div>
    }
    const createAppointmentsList = (bookAppointment, doctorsData) => {
        const appointmentsList = bookAppointment.map(appointmentID => {
            const doctorObject = doctorsData.find(doctor => doctor.id === appointmentID);
            return doctorObject;
        });

        return appointmentsList.filter(doctor => doctor);
    }

    const finalAppointments = createAppointmentsList(bookAppointment, doctorsData);

    console.log(finalAppointments)

    const doctorsSummaryShort = finalAppointments.map(({ name, speciality, consultation_details }) => ({
        doctorName: name,
        fieldOfStudy: speciality,
        totalFee: consultation_details.total_fee_bdt
    }));

    // if(appointList===null){
    //     return <div>Loading .......</div>
    // }

    // console.log(handleAppointmentList)

    // const allAppointList=handleAppointmentList()
    // console.log(allAppointList)


    return (
        <div>
            {
                bookAppointment.length < 1 ? <>
                    <div className="flex flex-col items-center justify-center p-12 bg-base-200 rounded-2xl border-2 border-dashed border-gray-300 w-full max-w-xl mx-auto my-10">

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-primary mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>

                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            No Appointment Today.
                        </h1>

                        <p className="text-md text-gray-500 mb-6">
                            দ্রুত এবং সহজে আপনার পরবর্তী ডাক্তার ভিজিট বুক করতে পারেন।
                        </p>

                        <NavLink to={`/`}><button className="btn btn-primary btn-lg">
                            নতুন অ্যাপয়েন্টমেন্ট বুক করুন
                        </button></NavLink>
                    </div>

                </>
                    :
                    <>
                        <div>
                            <div>
                                <h1 className="text-3xl text-center my-5 font-bold text-gray-800 mb-2">
                                    Appointment Today.
                                </h1>
                            </div>

                            <div>
                                {
                                    finalAppointments.map(appointment => <EachBooking key={appointment.id} appointment={appointment} doctorsSummaryShort={doctorsSummaryShort}></EachBooking>)
                                }
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Bookings;