import React from 'react'
import { FaRegClock } from 'react-icons/fa6'

function BasicInformation({ info, updateInfo  }) {
    return (
        <div>

            <div className='bg-[#FFFFFF] mx-50  mt-10 p-5 rounded-2xl border border-[#D1D5DB]'>
                <div className=''>
                    <span className='font-semibold text-xl leading-[1.4] tracking-normal'>Basic Information</span>
                    <div className='mt-5'>
                        <label htmlFor="">Online Test Title <span className='text-red-600'>*</span></label>
                        <input type="text" value={info.title} onChange={(e) => updateInfo('title', e.target.value)}
                            className='w-full h-12 rounded-lg py-2 px-3 bg-white border border-[#E5E7EB]' placeholder='Online Test Title' />
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-5'>
                        <div>
                            <label htmlFor="">Total Candidates <span className='text-red-600'>*</span></label>
                            <input type="text" value={info.totalCandidates} onChange={(e) => updateInfo('totalCandidates', e.target.value)}
                             className='w-full h-12 rounded-lg py-2 px-3 bg-white border border-[#E5E7EB]' placeholder='Total Candidates' />
                        </div>
                        <div>
                            <label htmlFor="">Total Slots<span className='text-red-600'>*</span></label>
                            <select value={info.totalSlots} onChange={(e) => updateInfo('totalSlots', e.target.value)} 
                             className="w-full h-12 rounded-lg py-2 px-3 bg-white border border-[#E5E7EB] cursor-pointer'" placeholder='Total Slots'>
                                <option value="">Select an option</option>
                                <option value="1"> 1</option>
                                <option value="2"> 2</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5 mt-5'>
                        <div>
                            <label htmlFor="">Total Question Set <span className='text-red-600'>*</span></label>
                            <select value={info.totalQuestionSet} onChange={(e) => updateInfo('totalQuestionSet', e.target.value)}
                             className="w-full h-12 rounded-lg py-2 px-3 bg-white border border-[#E5E7EB] cursor-pointer'" placeholder='Total Question Set'>
                                <option value="">Select an option</option>
                                <option value="1"> 1</option>
                                <option value="2"> 2</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Question Type<span className='text-red-600'>*</span></label>
                            <select value={info.questionType} onChange={(e) => updateInfo('questionType', e.target.value)}
                             className="w-full h-12 rounded-lg py-2 px-3 bg-white border border-[#E5E7EB] cursor-pointer'" placeholder='Question Type'>
                                <option value="">Select an option</option>
                                <option value="MCQ"> MCQ</option>
                                <option value="written"> Written</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 mt-5'>
                        <div>
                            <label htmlFor="">Start Time<span className='text-red-600'>*</span></label>
                            <div className='relative'>
                                <input value={info.startTime} onChange={(e) => updateInfo('startTime', e.target.value)}
                                 type="text" className='w-full h-12 rounded-lg py-2 px-3 bg-white border border-[#E5E7EB]' placeholder='Enter Start Time' />
                                <FaRegClock className='absolute right-2 top-3 w-5 h-5 text-[#9CA3AF]' />
                            </div>
                        </div>
                        <div className=''>
                            <label htmlFor="">End Time<span className='text-red-600'>*</span></label>
                            <div className='relative'>
                                <input type="text" value={info.endTime} onChange={(e) => updateInfo('endTime', e.target.value)} className='w-full h-12 rounded-lg py-2 px-3 bg-white border border-[#E5E7EB]' placeholder='Enter End Time' />
                                <FaRegClock className='absolute right-2 top-3 w-5 h-5 text-[#9CA3AF]' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Duration<span className='text-red-600'>*</span></label>
                            <input type="text" value={info.duration} onChange={(e) => updateInfo('duration', e.target.value)} className='w-full h-12 rounded-lg py-2 px-3 bg-white border border-[#E5E7EB]' placeholder='Enter Duration' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BasicInformation