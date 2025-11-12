import React from 'react';
import { removeLocalStorageData } from '../../context/localStorage';
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const EachBooking = ({ appointment }) => {

    const navigate=useNavigate()

    const {
        id,
        image_url,
        name,
        // education,
        speciality,
        // experience_years,
        // registration_number,
        consultation_details,
        // schedule,
        seating_location,
        // language_spoken,
        // rating
    } = appointment;

    const handleRemoveAppointment=()=>{
        removeLocalStorageData(id)
        toast('Remove Appointment')
        navigate('/',{replace:true})
        return
    }

    // console.log(doctorsSummaryShort)



    return (
        <div className="card w-full max-w-3xl bg-base-100 shadow-2xl mx-auto my-6 p-0 border border-primary/20 transform hover:scale-[1.01] transition duration-300">

            {/* Card Content Wrapper */}
            <div className="flex flex-col md:flex-row items-start p-6">

                {/* 1. Left Side: Doctor Image and Basic Info (25%) */}
                <div className="md:w-1/4 w-full flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:pr-4">
                    <div className="avatar mb-2">
                        <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                            <img
                                src={image_url || "https://daisyui.com/images/stock/photo-1534528736684-fd5867f0437e.jpg"}
                                alt={name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <p className="text-lg font-bold text-primary text-center">{name}</p>
                    <p className="text-sm text-gray-500 text-center">{speciality}</p>
                </div>

                {/* 2. Right Side: Appointment Details (75%) */}
                <div className="md:w-3/4 w-full md:pl-6 pt-4 md:pt-0 space-y-4">

                    {/* Appointment Status and ID */}
                    <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray-300">
                        <h3 className="text-xl font-extrabold text-base-content">অ্যাপয়েন্টমেন্ট ডিটেইলস</h3>
                        <div className="badge badge-success text-white font-bold text-sm">কনফার্মড</div> {/* Status badge */}
                    </div>

                    {/* Date and Time */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-4 4h.01M5 11h14M6 15h2m-2 4h2m4-4h2m-2 4h2m4-4h2m-2 4h2M9 11h6a2 2 0 012 2v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2a2 2 0 012-2z" /></svg>
                            <div>
                                <p className="text-xs text-gray-500">তারিখ</p>
                                <p className="font-bold text-lg">{appointment.date || '২০২৫-১২-২৫'}</p> {/* Use actual appointment date */}
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <div>
                                <p className="text-xs text-gray-500">সময়</p>
                                <p className="font-bold text-lg">{appointment.time || 'সকাল ১০:০০ টা'}</p> {/* Use actual appointment time */}
                            </div>
                        </div>
                    </div>

                    {/* Location and Fee */}
                    <div className="space-y-2">
                        <p className="font-semibold text-base-content">চেম্বারের ঠিকানা:</p>
                        <p className="text-sm font-medium">{seating_location.hospital_name}</p>
                        <p className="text-xs text-gray-600">{seating_location.address} (রুম: {seating_location.room_number})</p>
                    </div>

                    {/* Total Fee and Action */}
                    <div className="flex justify-between items-center pt-3 border-t">
                        <div className="text-left">
                            <p className="font-semibold text-base mb-1">মোট ফি পরিশোধ:</p>
                            <p className="text-2xl font-extrabold text-success">BDT {consultation_details.total_fee_bdt}</p>
                            <p className="text-xs text-gray-500">VAT+Tax সহ</p>
                        </div>
                        <div className="card-actions">
                            {/* You can add a button for cancellation or viewing details */}
                            <button onClick={()=>handleRemoveAppointment(id)} className="btn btn-outline btn-error btn-sm">ক্যান্সেল</button>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachBooking;