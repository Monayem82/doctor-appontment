import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';
import { toast,ToastContainer } from 'react-toastify';

const handleRegistration = async (username,email, password,navigate) => {
    
    // ⚠️ এই URL-টি আপনার Django Registration API Endpoint হবে
    const SIGNUP_URL = 'http://127.0.0.1:8000/auth_info/register/';

    try {
        // 1. Axios POST Request পাঠানো
        const response = await axios.post(SIGNUP_URL, {
            // Frontend থেকে পাঠানো ডেটা (Django-র আশা করা ফিল্ডের সাথে মিলিয়ে দিন)
            username:username,
            email: email,
            password: password,// অথবা অন্যান্য ফিল্ড যেমন: username, first_name ইত্যাদি
        });

        // 2. Successful Response হ্যান্ডেল করা (সাধারণত 201 Created)
        console.log("Registration Successful! Data received:", response.data);

        alert("Registration successful! Please log in.");

        // সফল হলে লগইন পেজে রিডাইরেক্ট করা যেতে পারে
        toast('Succesfully Registers')
        navigate('/login'); 

        return response.data;

    } catch (error) {
        // 3. Error Response হ্যান্ডেল করা (যেমন: 400 Bad Request, Duplicate Email)

        if (error.response) {
            // সার্ভার থেকে আসা বিস্তারিত ত্রুটি মেসেজ
            const errorData = error.response.data;
            console.error("Registration Failed. Status:", error.response.status, "Details:", errorData);

            let errorMessage = "Registration failed. Please check the form.";

            // Django REST Framework (DRF) থেকে আসা Validation Error হ্যান্ডেল করা 
            if (errorData.email) {
                // যেমন: {"email": ["user with this email already exists."]}
                errorMessage = `Email Error: ${errorData.email.join(' ')}`;
            } else if (errorData.password) {
                // যেমন: {"password": ["This password is too short."]}
                errorMessage = `Password Error: ${errorData.password.join(' ')}`;
            } else if (errorData.non_field_errors) {
                // যদি একাধিক ফিল্ডে সমস্যা থাকে
                errorMessage = `Error: ${errorData.non_field_errors.join(' ')}`;
            }

            alert(errorMessage);

        } else if (error.request) {
            // নেটওয়ার্ক সমস্যা বা সার্ভার ডাউন
            console.error("No response received from server.");
            alert("Could not connect to the server. Please try again later.");
        } else {
            // অন্য কোনো JavaScript ভুল
            console.error("Error setting up request:", error.message);
        }

        return null;
    }
};


const SignUp = () => {
    const navigate=useNavigate();

    const handleSubmitSingUP = e => {
        e.preventDefault()
        const username=e.target.username.value
        const email=e.target.email.value
        const password=e.target.password.value

        handleRegistration(username,email,password,navigate)



    }

    return (
        <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className='text-3xl text-center font-bold'>Sign-Up</h1>
                <form onSubmit={handleSubmitSingUP} className="fieldset">
                    <label className="label">Username</label>
                    <input type="text" className="input" name='username' placeholder="User Name" required />
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" required />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" required />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default SignUp;