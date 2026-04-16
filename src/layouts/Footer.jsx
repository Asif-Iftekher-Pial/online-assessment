import React from 'react'
import footerLogo from '../assets/footerLogo.svg'
import { BsTelephoneOutbound } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
function Footer() {
    return (
        <div className='bg-[#130B2C] text-white flex-col lg:flex lg:flex-row md:items-start sm:items-start lg:justify-between  lg:items-center lg:h-15 lg:px-15 px-5'>
            <div className='lg:grid-cols-6 sm:grid-cols-12 md:grid-cols-12 '>
                <div className='flex-col lg:flex-row  flex items-start lg:items-center lg:py-5 py-5'>
                    <span className='mr-2 font-normal text-xl leading-[1.3] tracking-normal align-middle sm:py-5 py-5 '>Powered by</span>
                    <img src={footerLogo} alt="" />
                </div>

            </div>
            <div className='lg:grid-cols-6 sm:grid-cols-12 md:grid-cols-12'>
                <div className='lg:flex sm:flex-col md:flex-col lg:flex-row items-center   lg:py-0'>
                    <span className='mr-5 font-normal text-xl leading-[1.3] tracking-normal align-middle '>Helpline</span>
                    <div className='flex items-center mr-5 py-5'>
                        <BsTelephoneOutbound className='h-6 w-6 mr-2' />
                        <span className='mr-2 font-normal text-xl leading-[1.3] tracking-normal align-middle'>+88 011020202505</span>
                    </div>
                    <div className='flex items-center mb-5 lg:mb-0'>
                        <FiMail className='h-6 w-6 mr-2 ' />
                        <span className='mr-2 font-normal text-xl leading-[1.3] tracking-normal align-middle'>support@akij.work</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer