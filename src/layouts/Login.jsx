import React, { useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { IoEyeOutline } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();
    const togglePassword = () => {
        setShow(!show);
    }
    const userLogin = () => {
        const authData = {
            email: "abc@gmail.com",
            password: "123456",
        }
        const candidateData = {
            email: 'can@gmail.com',
            password: '123'
        }
        if (email === "" || password === "") {
            alert("Please enter email and password");
            return;
        }
        if (email !== authData.email || password !== authData.password) {
            if (email !== candidateData.email || password !== candidateData.password) {
                alert("Wrong!! use abc@gmail.com and 123456 for login or can@gmail.com and 123 for candidate login");
                return;
            }
        }
        login(email === authData.email ? authData : candidateData);
        localStorage.setItem("auth", JSON.stringify(email === authData.email ? authData : candidateData));
        localStorage.setItem("isCandidate", JSON.stringify(email === candidateData.email));
        navigate(email === authData.email ? "/admin/dashboard" : "/candidate/dashboard");
    }
    return (
        <>
            <div className='bg-gray-100 min-h-screen flex flex-col overflow-hidden'>
                <Header isLogin={'login'} />
                {/* content */}
                <main className='flex-1 h-full flex flex-col'>
                    <div className='flex-1 flex flex-col items-center justify-center '>
                        <div className='mb-5'>
                            <h1 className='font-semibold text-2xl leading-[1.3] tracking-normal text-center align-middle'>Sign In</h1>
                        </div>
                        <div className=' w-85.75 lg:w-142.75 opacity-100 gap-2.5 rounded-2xl pt-8 px-8 pb-10 border border-[#E0E0E0] bg-white'>
                            <div className=''>
                                <div className='mb-10'>

                                    <label htmlFor="">Email/User ID</label>
                                    <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email/User ID' className='w-full h-10 rounded-xl border border-[#E0E0E0] mb-5 px-4' />
                                    <label htmlFor="">Password</label>
                                    <div className='relative'>
                                        <input type={show ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' className='w-full h-10 rounded-xl border border-[#E0E0E0] px-4' />
                                        <IoEyeOutline onClick={togglePassword} className='absolute right-3 top-2 text-[#9CA3AF] h-6 w-6 cursor-pointer' />
                                        <IoIosEyeOff style={{ display: show ? "block" : "none" }} onClick={togglePassword} className='absolute right-3 top-2 text-[#9CA3AF] h-6 w-6 cursor-pointer' />
                                    </div>
                                    <div className='text-[#6633FF] cursor-pointer text-right'>Forgot Password?</div>
                                </div>
                                <button onClick={userLogin} className='w-full h-10 rounded-2xl bg-[#6633FF] text-white cursor-pointer'>Sign In</button>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Login