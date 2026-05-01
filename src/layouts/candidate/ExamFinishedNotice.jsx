import React from 'react'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import { useAuth } from '../../context/AuthContext';

function ExamFinishedNotice() {
    const { user } = useAuth();
    return (
        <div className='bg-white w-85.75 lg:w-212.25 rounded-2xl mt-5 p-5 flex flex-col items-center justify-center'>
            <div><IoCheckmarkDoneCircle className='text-green-500 text-4xl' /></div>
            <p className='text-lg font-semibold mt-3'>Exam Finished!</p>
            <p className='text-gray-600 mt-2'>
                Congratulations! {user?.email}, You have completed your MCQ Exam for Probationary Officer. Thank you for participating.
            </p>
        </div>
    )
}

export default ExamFinishedNotice