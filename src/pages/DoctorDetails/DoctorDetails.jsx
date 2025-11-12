import React, { useContext } from 'react';
import {  useParams } from 'react-router';
import { DoctorsContext } from '../../context/doctorsContext';

const DoctorDetails = () => {

    const {doctorsData}=useContext(DoctorsContext)

    const {id}=useParams()

    // console.log(doctorsData,id)
    

    if(!doctorsData){
        return <div>Loading details...</div>;
    }

    const eachDoctorInfo=doctorsData.find(doctor=>id===doctor.id)
    console.log(eachDoctorInfo)

    if (!eachDoctorInfo) {
        return <div>Error: Doctor with ID {id} not found.</div>;
    }

    // if (!doctor) {
    //     return <div className="p-4 bg-red-100 text-red-700 rounded-lg">Error: Doctor data not available.</div>;
    // }

    const {
        image_url,
        name,
        education,
        speciality,
        experience_years,
        registration_number,
        consultation_details,
        schedule,
        seating_location,
        language_spoken,
        rating
    } = eachDoctorInfo;

    return (
        // Main Container: Wide card (w-full max-w-4xl) with flex layout
        // The bg-base-100 provides the white background
        <div className="card w-full max-w-4xl bg-base-100 shadow-xl mx-auto my-4 border border-gray-200 p-0">

            {/* Horizontal Flex Container for Image (Left) and Details (Right) */}
            <div className="flex flex-col md:flex-row items-start">

                {/* 1. Left Side: Doctor Image & Rating */}
                <div className="md:w-1/4 w-full flex flex-col items-center p-4 bg-gray-50 border-r border-b md:border-b-0 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                    <div className="avatar mb-3">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                            <img
                                src={image_url || "https://daisyui.com/images/stock/photo-1534528736684-fd5867f0437e.jpg"}
                                alt={name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div className="badge badge-warning gap-1 text-sm font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Rating: {rating}
                    </div>
                </div>

                {/* 2. Right Side: Full Details */}
                <div className="md:w-3/4 w-full p-6 space-y-3 text-base-content">

                    {/* Name, Speciality, and Experience (Top Row) */}
                    <div className="pb-3 border-b">
                        <h2 className="text-2xl font-extrabold">{name}</h2>
                        <p className="text-xl font-bold text-primary">{speciality}</p>
                        <p className="text-sm font-medium text-gray-600">
                            <span className="font-bold">Experience:</span> {experience_years} Years |
                            <span className="ml-2">Reg. No:</span> {registration_number}
                        </p>
                    </div>

                    {/* Detailed Information (Middle Section) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Education & Languages */}
                        <div>
                            <p className="font-semibold text-base mb-1">Education:</p>
                            <p className="text-sm">{education}</p>

                            <p className="font-semibold text-base mt-3 mb-1">Languages:</p>
                            <p className="text-sm">{language_spoken.join(', ')}</p>
                        </div>

                        {/* Working At */}
                        <div>
                            <p className="font-semibold text-base mb-1">Working At:</p>
                            <p className="text-sm font-medium">{seating_location.hospital_name}</p>
                            <p className="text-xs text-gray-500">{seating_location.address}, Room: {seating_location.room_number}</p>
                        </div>
                    </div>

                    {/* Schedule, Fee, and Action (Bottom Row) */}
                    <div className="flex justify-between items-end pt-4 border-t">

                        {/* Schedule */}
                        <div>
                            <p className="font-semibold text-base mb-1">Schedule:</p>
                            <p className="text-sm"><span className="font-medium">Days:</span> {schedule.available_days.join(', ')}</p>
                            <p className="text-sm"><span className="font-medium">Time:</span> {schedule.session_time}</p>
                        </div>

                        {/* Fee & Button */}
                        <div className="text-right">
                            <p className="font-semibold text-base mb-1">Total Fee:</p>
                            <p className="text-xl font-bold text-success">BDT {consultation_details.total_fee_bdt}</p>
                            <p className="text-xs text-gray-500 mb-2">Incl. {consultation_details.vat_tax_percentage}% VAT+Tax</p>

                        </div>
                        
                    </div>
                    
                            <button className="btn btn-primary btn-sm md:btn-md lg:w-full">Book Appointment</button>

                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;