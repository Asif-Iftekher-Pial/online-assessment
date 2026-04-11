import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader'
import ExamCard from './ExamCard'
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import group from '../../assets/Group.svg'
function AdminHome() {
    // check if onlineTest exam data is stored in locastorage or not if store then get the data from locastorage and parse it and set it to state otherwise set empty array to state
    const [onlineTests, setOnlineTests] = useState([]);

    useEffect(() => {
        const storedTests = localStorage.getItem('onlineTests');
        if (storedTests) {
            setOnlineTests(JSON.parse(storedTests));
        }
    }, []);


    return (
        <div>
            {/* header */}
            <AdminHeader />

            {/* Exam Cards */}

            { onlineTests.length > 0 && <div>

                <div className='grid grid-cols-2 gap-5 px-15 '>
                    {onlineTests.map((test, index) => (

                        <div className=' mt-4' key={index}>
                            <ExamCard info={test} />
                        </div>
                    ))}

                </div>
                {/* pagination */}
                <div className='flex justify-between px-15 mt-5'>
                    <div className='flex items-center'>
                        <button className=''>
                            <FaLessThan className=' text-[#9CA3AF] w-6 h-6 opacity-100 border rounded ' />
                        </button>
                        <span className='mx-5'> 1 </span>
                        <button>
                            <FaGreaterThan className=' text-[#9CA3AF] w-6 h-6 opacity-100 border  rounded' />
                        </button>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-medium text-xs leading-[1.6] tracking-normal mr-4'>Online Test Per Page</p>
                        <button className='opacity-100  rounded-lg border p-2.5 bg-white border-gray-300'>
                            <div className='flex items-center justify-center '>
                                <span className='font-medium text-xs leading-[1.6] tracking-normal mr-2 '>10</span>
                                <FaChevronUp className=' text-[#9CA3AF]' />
                            </div>
                        </button>
                    </div>
                </div>
            </div>}


            {/* no test found */}
            {onlineTests.length === 0 && (
                <div className='grid grid-cols-1 mt-5'>
                    <div className='bg-white border border-gray-200 mx-15 rounded-2xl'>
                        <div className='flex flex-col items-center justify-center py-20'>
                            <img src={group} alt="No Online Test Found" />
                            <p className='text-xl leading-[1.4] tracking-normal text-center'>No Online Test Found</p>
                            <p className='font-normal text-sm leading-[1.4] tracking-normal text-center'>Currently, there are no online tests available. Please check back later for updates.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminHome