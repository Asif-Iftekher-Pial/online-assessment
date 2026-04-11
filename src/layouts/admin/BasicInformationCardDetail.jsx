import React from 'react'
import { LuPencil } from "react-icons/lu";
function BasicInformationCardDetail({ info, goBack }) {
    return (
        <div>
            <div className='bg-[#FFFFFF] mx-50  mt-10 p-5 rounded-2xl border border-[#D1D5DB]'>
                <div className='flex justify-between'>
                    <span className='font-semibold text-xl leading-[1.4] tracking-normal'>Basic Information</span>
                    <div>
                        <button onClick={goBack} className='text-[#6633FF] flex items-center cursor-pointer'>
                            <LuPencil />
                            Edit
                        </button>
                    </div>
                </div>
                <div className='mt-5'>
                    <p className='text-[#64748B]'>Online Test Title</p>
                    <span className='text-[#334155] '>{info.title}</span>
                </div>
                <div className='grid grid-cols-4'>
                    <div className='mt-5'>
                        <p className='text-[#64748B]'>Total Candidates</p>
                        <span>{info.totalCandidates}</span>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#64748B]'>Total Slots</p>
                        <span>{info.totalSlots}</span>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#64748B]'>Total Question Set</p>
                        <span>{info.totalQuestionSet}</span>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#64748B]'>Duration Per Slots (Minutes)</p>
                        <span>{info.duration}</span>
                    </div>
                    <div className='mt-5'>
                        <p className='text-[#64748B]'>Question Type</p>
                        <span>{info.questionType}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicInformationCardDetail