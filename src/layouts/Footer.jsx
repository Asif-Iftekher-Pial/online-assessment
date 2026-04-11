import React from 'react'
import footerLogo from '../assets/footerLogo.svg'
import { BsTelephoneOutbound } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
function Footer() {
    return (
        <div className='bg-[#130B2C] text-white flex justify-between h-20 items-center px-15'>
            <div className='grid-cols-6'>
                <div className='flex items-center'>
                    <span className='mr-2 font-normal text-xl leading-[1.3] tracking-normal align-middle'>Powered by</span>
                    <img src={footerLogo} alt="" />
                </div>

            </div>
            <div className='grid-cols-6'>
                <div className='flex items-center'>
                    <span className='mr-5 font-normal text-xl leading-[1.3] tracking-normal align-middle'>Helpline</span>
                    <div className='flex items-center mr-5'>
                        <BsTelephoneOutbound className='h-6 w-6 mr-2' />
                        <span className='mr-2 font-normal text-xl leading-[1.3] tracking-normal align-middle'>+88 011020202505</span>
                    </div>
                    <div className='flex items-center'>
                        <FiMail className='h-6 w-6 mr-2' />
                        <span className='mr-2 font-normal text-xl leading-[1.3] tracking-normal align-middle'>support@akij.work</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer