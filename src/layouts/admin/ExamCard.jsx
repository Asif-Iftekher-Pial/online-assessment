import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { TbClockShare } from "react-icons/tb";
import Button from '../../components/Button';
import { FaRegClock } from "react-icons/fa6";
import { LuNotepadText } from "react-icons/lu";
import { TiDelete } from "react-icons/ti";
import { useLocation, useNavigate } from 'react-router-dom';
function ExamCard({ info }) {
    const navigate = useNavigate();
    const isCandidate = JSON.parse(localStorage.getItem("isCandidate"));
    const startExam = (exam_id) => { 
        console.log(exam_id)
        if (isCandidate) {
            navigate(`/candidate/exam-room/${exam_id}`)
        }
     }
    return (
        <div className='border border-xl border-[#E5E7EB] pt-8 px-8 pb-10 rounded-2xl bg-white'>
            <header>
                <span className='font-semibold text-xl leading-[1.4] tracking-normal'>{info.title}</span>
            </header>
            <main className='mt-5'>
                <div className='flex justify-between'>
                    <div className='flex justify-center items-center'>
                        {
                            isCandidate ?
                                (
                                    <>
                                        <FaRegClock className='mr-2 text-[#9CA3AF] w-6 h-6 opacity-100' />
                                        <p className='text-[#64748B]'>Duration : <span className='text-black'>{info.duration}    mins</span></p>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <FaUsers className='mr-2 text-[#9CA3AF] w-6 h-6 opacity-100' />
                                        <p className='text-[#64748B]'>Candidates : <span className='text-black'>{info.totalCandidates}</span></p>
                                    </>
                                )
                        }
                    </div>

                    <div className='flex justify-center items-center'>
                        {
                            isCandidate ? (
                                <>
                                    <LuNotepadText className='mr-2 text-[#9CA3AF] w-6 h-6 opacity-100' />
                                    <p className='text-[#64748B]'>Questions : <span className='text-black'>{info.questions.length}</span></p>
                                </>
                            ) : (
                                <>
                                    <CgNotes className='mr-2 text-[#9CA3AF] w-6 h-6 opacity-100' />
                                    <p className='text-[#64748B]'>Question Set: <span className='text-black'>{info.totalQuestionSet}</span></p>
                                </>
                            )
                        }

                    </div>

                    <div className='flex justify-center items-center'>
                        {
                            isCandidate ? (
                                <>
                                    <TiDelete className='mr-2 text-[#EF4444] w-6 h-6 opacity-100' />
                                    <p className='text-[#EF4444]'>Negative Marking:<span className='text-black'> -0.25/wrong</span></p>
                                </>
                            ) : (
                                <>
                                    <TbClockShare className='mr-2 text-[#9CA3AF] w-6 h-6 opacity-100' />
                                    <p className='text-[#64748B]'>Exam Slots:<span className='text-black'>{info.totalSlots}</span></p>
                                </>
                            )
                        }
                    </div>
                </div>
            </main>
            <footer className='mt-5'>
                <Button onClick={() => startExam(info.id)} title={isCandidate ? "Start Exam" : "View Candidates"} outlined={true} />
            </footer>
        </div >
    )
}

export default ExamCard