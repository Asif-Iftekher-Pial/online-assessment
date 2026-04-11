import React from 'react'
import Resource_logo from '../assets/Resource_Logo.svg'
import { FaUser } from "react-icons/fa";
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Header() {
    const { user } = useAuth();
    return (
        <div className='h-20 flex bg-white shadow-md px-15'>
            {/* Logo */}
            <div className='flex items-center'>
                <Link to={"/admin/dashboard"}>
                    <img src={Resource_logo} alt="Resource Logo" />
                </Link>
            </div>

            {/* Nav */}
            <div className='flex flex-1 items-center justify-between px-8'>
                <div className=' font-normal text-base leading-[1.4] tracking-normal text-center'>
                    Dashboard
                </div>
                <div className='flex'>
                    {/* img */}
                    <div className='h-10 w-10 rounded-full flex justify-center items-center bg-[#F6F6F6]'>
                        <FaUser className='h-6 w-6' style={{ color: '#D6D6D6' }} />
                    </div>
                    <div className='flex flex-col'>

                        <div className='font-semibold text-sm leading-[1.4] tracking-normal'>
                            {user?.email}
                        </div>
                        <div className='font-medium text-xs tracking-normal text-[#64748B]'>
                            ID : {user?.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header