import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const navigate=useNavigate()

    const handleLogin = async (email, password) => {
        try {
            // 1. Axios POST Request
            const response = await axios({
                method: 'post',
                url: 'http://127.0.0.1:8000/auth_info/login/', // আপনার Django API endpoint
                data: {
                    // রিকোয়েস্টের বডিতে email এবং password পাঠানো হচ্ছে
                    email: email,
                    password: password
                }
            });
            toast(response.data.message)

            // 2. Successful Response হ্যান্ডেল করা (HTTP Status 200 বা 201)
            console.log("Login Successful! Data received:", response.data);

            // JWT টোকেনগুলি সংরক্ষণ করা (যেমন: localStorage-এ)
            const accessToken = response.data.access;
            const refreshToken = response.data.refresh;

            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('refresh_token', refreshToken);
            navigate('/',{replace:true})
            
            // আপনি এই ফাংশন থেকে ডেটা রিটার্নও করতে পারেন
            return response.data;
            

        } catch (error) {
            // 3. Error Response হ্যান্ডেল করা (যেমন: 401 Unauthorized, 400 Bad Request, Network Error)

            // যদি সার্ভার থেকে রেসপন্স আসে (যেমন 401)
            if (error.response) {
                console.error("Login Failed:", error.response.data);
                toast(`Login Failed ${error.response.data}`)
                console.error("Status Code:", error.response.status);
                // ইউজারকে মেসেজ দেখানো: error.response.data.error
                alert(error.response.data.error || "Login failed. Please check your credentials.");
            } else if (error.request) {
                // রিকোয়েস্ট পাঠানো হয়েছে কিন্তু কোনো রেসপন্স আসেনি (যেমন সার্ভার ডাউন)
                console.error("No response received:", error.request);
                alert("Could not connect to the server.");
            } else {
                // অন্য কোনো ভুল
                console.error("Error setting up request:", error.message);
            }

            // ব্যর্থতা বা ত্রুটির ক্ষেত্রে এটি রিটার্ন করা যেতে পারে
            return null;
        }
    }

    const handleOnSubmitLoginForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        handleLogin(email,password)
    }


    return (

        <div className="card bg-base-100 w-full mx-auto my-10 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className='text-3xl text-center font-bold'>Login</h1>
                <form onSubmit={handleOnSubmitLoginForm} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" required />
                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" required />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;