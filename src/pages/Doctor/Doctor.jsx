import React from 'react';
import { NavLink } from 'react-router';

const Doctor = ({ doctor }) => {

    if(!doctor){
        return null
    }

    const {
        // id,
        // image_url,
        name,
        education,
        speciality,
        experience_years,
        registration_number,
        consultation_details,
        schedule,
        // seating_location,
        // language_spoken,
        rating
    } = doctor;

    // console.log(doctor.id)
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto my-4 border border-gray-200 transform transition-transform duration-300 hover:shadow-2xl">

            {/* Doctor Image & Basic Info Section */}
            <div className="card-body p-6 text-base-content">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="avatar">
                        <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                            <img
                                src={'/src/assets/doctor-sample.png'}
                                alt={doctor.name}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title text-2xl font-bold">{name}</h2>
                        <p className="text-primary text-lg font-semibold">{speciality}</p>
                    </div>
                </div>

                {/* Rating and Experience */}
                <div className="flex justify-between items-center text-sm border-t pt-2 border-base-200">
                    <div className="badge badge-warning gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {rating}
                    </div>
                    <p className="text-sm font-medium ml-4">Exp: <span className="font-bold">{experience_years} Years</span></p>
                </div>
            </div>

            {/* Details Section */}
            <div className="px-6 pb-6 space-y-3 text-base-content">

                {/* Education & Registration */}
                <div className="text-sm">
                    <p><span className="font-semibold">Education:</span> {education}</p>
                    <p><span className="font-semibold">Reg. No:</span> {registration_number}</p>
                </div>

                {/* Working At */}
                {/* <div className="border-t pt-3">
                    <p className="font-semibold text-base mb-1">Working At:</p>
                    <p className="text-sm font-medium">{seating_location.hospital_name}</p>
                    <p className="text-xs text-gray-500">{seating_location.address}, Room: {seating_location.room_number}</p>
                </div> */}

                {/* Schedule & Consultation */}
                <div className="flex justify-between items-start border-t pt-3">
                    <div>
                        <p className="font-semibold text-base mb-1">Schedule:</p>
                        <p className="text-sm"><span className="font-medium">Days:</span> {schedule.available_days.join(', ')}</p>
                        <p className="text-sm"><span className="font-medium">Time:</span> {schedule.session_time}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold text-base mb-1">Total Fee:</p>
                        <p className="text-lg font-bold text-success">BDT {consultation_details.total_fee_bdt}</p>
                        <p className="text-xs text-gray-500">Incl. {consultation_details.vat_tax_percentage}% VAT+Tax</p>
                    </div>
                </div>

                {/* Book Appointment Button */}
                <div className="card-actions justify-center pt-4">
                    {/* <button className="btn btn-primary btn-block"><NavLink to={`/doctorDetails`}>Show Details</NavLink></button> */}
                    <NavLink to={`/doctorDetails/${doctor.id}`}><button className="btn btn-primary btn-block">Show Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Doctor;