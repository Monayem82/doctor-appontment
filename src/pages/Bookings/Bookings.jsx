import React, { useContext, useEffect, useState } from 'react';
import { getLocalStorageData } from '../../context/localStorage';
import { DoctorsContext } from '../../context/doctorsContext';
import EachBooking from './EachBooking';
import { NavLink } from 'react-router';
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer } from 'recharts';

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

    const doctorsSummaryShort = finalAppointments.map(({ name, speciality, consultation_details, experience_years, rating }) => ({
        doctorName: name,
        fieldOfStudy: speciality,
        withoutTax: consultation_details.fee_bdt,
        totalFee: consultation_details.total_fee_bdt,
        experience: experience_years,
        rating: rating
    }));

    // if(appointList===null){
    //     return <div>Loading .......</div>
    // }

    // console.log(handleAppointmentList)

    // const allAppointList=handleAppointmentList()
    // console.log(allAppointList)

    // console.log(doctorsSummaryShort)

    // ধরে নিন: ResponsiveContainer, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend ইত্যাদি import করা আছে।
    // ধরে নিন: doctorsSummaryShort এবং finalAppointments ডেটা উপলব্ধ।

    const chartFiq = <>
        {/* min-h-screen সরানো হয়েছে বা h-auto ব্যবহার করা হয়েছে */}
        <div className="container mx-auto p-4 md:p-8 bg-base-200">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-base-content"> {/* mb-10 থেকে mb-6 করা হলো */}
                Doctors' Performance Analysis {/* ডাক্তারদের পারফরম্যান্স এনালিসিস */}
            </h1>

            {/* Grid Container for Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Chart 1: Fee Analysis */}
                <div className="card bg-base-100 shadow-xl border border-primary/10 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div className="card-body p-6">
                        <h2 className="card-title text-2xl font-semibold mb-4 text-center text-primary">Fee Analysis (With and Without VAT)</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={doctorsSummaryShort}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                <XAxis
                                    dataKey="doctorName"
                                    angle={-45}
                                    textAnchor="end"
                                    height={80}
                                    interval={0}
                                    style={{ fontSize: '12px' }}
                                />
                                <YAxis
                                    width={60}
                                    tickFormatter={(value) => `৳${value}`}
                                    style={{ fontSize: '12px' }}
                                />
                                <Tooltip
                                    formatter={(value) => `৳${value}`}
                                    labelFormatter={(label) => `Doctor: ${label}`}
                                    contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid #ccc', borderRadius: '5px' }}
                                    itemStyle={{ color: '#333' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar dataKey="withoutTax" fill="#4B0082" name="Fee (Without VAT)" barSize={20} />
                                <Bar dataKey="totalFee" fill="#8A2BE2" name="Total Fee (With VAT)" barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Chart 2: Rating and Experience Analysis */}
                <div className="card bg-base-100 shadow-xl border border-secondary/10 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <div className="card-body p-6">
                        <h2 className="card-title text-2xl font-semibold mb-4 text-center text-secondary">Rating and Experience Analysis</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={doctorsSummaryShort}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                <XAxis
                                    dataKey="doctorName"
                                    angle={-45}
                                    textAnchor="end"
                                    height={80}
                                    interval={0}
                                    style={{ fontSize: '12px' }}
                                />
                                <YAxis
                                    width={60}
                                    style={{ fontSize: '12px' }}
                                />
                                <Tooltip
                                    labelFormatter={(label) => `Doctor: ${label}`}
                                    contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid #ccc', borderRadius: '5px' }}
                                    itemStyle={{ color: '#333' }}
                                />
                                <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar dataKey="rating" fill="#FFD700" name="Rating" barSize={20} />
                                <Bar dataKey="experience" fill="#32CD32" name="Experience (Years)" barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>
        </div>
    </>


    return (
        <div>
            {/* প্রধান কন্টেনারে কোনো অপ্রয়োজনীয় মার্জিন বা হাইট ক্লাস নেই */}
            {
                bookAppointment.length < 1 ? <>
                    <div className="flex flex-col items-center justify-center p-12 bg-base-200 rounded-2xl border-2 border-dashed border-gray-300 w-full max-w-xl mx-auto my-10">

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-primary mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>

                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            No Appointment Today.
                        </h1>

                        <p className="text-md text-gray-500 mb-6">
                            You can quickly and easily book your next doctor's visit.
                        </p>

                        <NavLink to={`/`}><button className="btn btn-primary btn-lg">
                            Create New Appointment
                        </button></NavLink>
                    </div>

                </>
                    :
                    <>
                        {/* chartFiq এখন অপ্রয়োজনীয় হাইট ছাড়াই ডেটা দেখাবে */}
                        <div className='bg-base-200'> {/* ব্যাকগ্রাউন্ড রঙ বজায় রাখা হলো */}
                            {chartFiq}
                        </div>
                        <div>
                            <div className="py-8"> {/* চার্ট সেকশনের নিচে সামান্য প্যাডিং যোগ করা হলো */}
                                <h1 className="text-3xl text-center font-bold text-gray-800">
                                    Appointment Today.
                                </h1>
                            </div>

                            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-6 p-4'>
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