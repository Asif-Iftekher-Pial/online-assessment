import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { TbClockShare } from "react-icons/tb";
import Button from '../../components/Button';
function ExamCard({ info }) {
    return (
        <div className='border border-xl border-[#E5E7EB] pt-8 px-8 pb-10 rounded-2xl bg-white'>
            <header>
                <span className='font-semibold text-xl leading-[1.4] tracking-normal'>{info.title}</span>
            </header>
            <main className='mt-5'>
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center'>
                        <FaUsers className='mr-2 text-[#9CA3AF] w-6 h-6 opacity-100' />
                        <p className='text-[#64748B]'>Candidates : <span className='text-black'>{info.totalCandidates}</span></p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <CgNotes className='mr-2 text-[#9CA3AF] w-6 h-6 opacity-100' />
                        <p className='text-[#64748B]'>Question Set: <span className='text-black'>{info.totalQuestionSet}</span></p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <TbClockShare className='mr-2 text-[#9CA3AF] w-6 h-6 opacity-100' />
                        <p className='text-[#64748B]'>Exam Slots:<span className='text-black'>{info.totalSlots}</span></p>
                    </div>
                </div>
            </main>
            <footer className='mt-5'>
                <Button title={"View Candidates"} outlined={true} />
            </footer>
        </div>
    )
}

export default ExamCard