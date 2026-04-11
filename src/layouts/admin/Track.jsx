import React from 'react'
import { Link } from 'react-router-dom'

function Track({ activeTab }) {
    return (
        <div className='bg-[#FFFFFF]  mx-15 mt-10 p-8 rounded-2xl'>
            <span className='font-semibold text-xl leading-[1.4] tracking-normal'>Manage Online Test</span>
            <div className='flex justify-between mt-5'>
                <div className='flex items-center'>
                    <div className='flex items-center'>
                        <div className='w-6 h-6 mr-2 rounded-full bg-[#6633FF] text-white flex items-center justify-center'>
                            <span>1</span>
                        </div>
                        <span className='text-[#6633FF] font-semibold text-xl leading-[1.4] tracking-normal'>Basic Info</span>

                    </div>
                    <div className={activeTab === 'confirm' ? 'border-b w-30 border-[#6633FF] mx-8' : 'border-b w-30 border-[#D1D5DB] mx-8'}></div>
                    <div className='flex items-center'>
                        <div className={activeTab === 'confirm' ? 'bg-[#6633FF] w-6 h-6 mr-2 rounded-full  text-white flex items-center justify-center' : 'bg-[#D1D5DB] w-6 h-6 mr-2 rounded-full  text-white flex items-center justify-center'} >
                            <span>2</span>
                        </div>
                        <span className={activeTab === 'confirm' ? 'text-[#6633FF] font-semibold text-xl leading-[1.4] tracking-normal' : 'text-[#D1D5DB] font-semibold text-xl leading-[1.4] tracking-normal'}>Questions</span>
                    </div>
                </div>
                <div>
                    <Link to="/admin/dashboard">
                        <button className='bg-white border border-[#E5E7EB] h-12 opacity-100 gap-1.5 rounded-2xl py-3 px-8  cursor-pointer' >
                            Back to Dashboard
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Track