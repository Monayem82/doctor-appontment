import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { NavLink } from 'react-router';

const CoomingSoon = () => {
    return (
        <div className="flex justify-center p-10 my-10">
            <div className="card w-full max-w-lg bg-warning/10 border-2 border-warning shadow-lg text-warning-content">
                <div className="card-body items-center text-center p-8">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-warning mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.4 1.4a1 1 0 0 0 1.4 0l1.4-1.4a1 1 0 0 0 0-1.4l-1.4-1.4a1 1 0 0 0-1.4 0z"></path><path d="M17 19H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z"></path><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>

                    <h2 className="card-title text-3xl font-bold mb-2 text-warning-content">
                        এই পেজটি নির্মাণাধীন। আমরা আপনাকে একটি **অসাধারণ অভিজ্ঞতা** দিতে প্রস্তুত হচ্ছি।
                    </h2>

                    <p className="text-md text-gray-700">
                        এই মুহূর্তে আমরা এই সেকশনটিকে আরও ভালো করে তৈরি করার কাজ করছি।
                        দয়া করে পরে আবার ভিজিট করুন অথবা আমাদের **হোমপেজে** ফিরে যান।
                    </p>

                    <div className="card-actions justify-end mt-6">
                        <NavLink to={`/`}><button className="btn btn-warning btn-outline">হোমপেজে যান</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoomingSoon;