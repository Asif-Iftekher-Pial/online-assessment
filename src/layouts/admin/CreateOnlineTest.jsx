import React, { useEffect, useRef, useState } from 'react'
import Button from '../../components/Button'
import { FaRegClock } from "react-icons/fa6";
import BasicInformation from './BasicInformation';
import BasicInformationCardDetail from './BasicInformationCardDetail';
import { Link } from 'react-router-dom';
import Track from './Track';
import Modal from '../../components/Modal';
import McqQuestionForm from './McqQuestionForm';
import McqQuestionCard from './McqQuestionCard';
function CreateOnlineTest() {
    let information = {
        title: "",
        totalCandidates: null,
        totalSlots: null,
        totalQuestionSet: null,
        startTime: "",
        endTime: "",
        duration: null,
        questionType: ''

    }
    const [activeTab, setActiveTab] = useState('create');
    const [info, setInfo] = useState([{ ...information, id: 1 }]);
    const [addQuestionAddButton, setAddQuestionAddButton] = useState(false);
    const [confirmButtons, setConfirmButtons] = useState(true)
    const [showModal, setShowModal] = useState(false);
    const [questionData, setQuestionData] = useState([]);
    const mcqFormRef = useRef(null)
    const createOnlineTest = () => {
        if (activeTab === 'create') {
            setActiveTab('detail');
        } else if (activeTab === 'detail') {
            setActiveTab('confirm');
            setAddQuestionAddButton(true);
            setConfirmButtons(false)
        }

    }
    const goBack = () => {
        if (activeTab === 'detail') {
            setActiveTab('create');
        }
    }
    const modalOnClose = () => {
        setShowModal(false);
    }
    const updateInfo = (field, value) => {
        setInfo(prev => prev.map((item, idx) =>
            idx === 0 ? { ...item, [field]: value } : item  // update first item
        ))
    }
    // when user what to create another test, we need to reset the form and question data and start fresh test information and icrement the id for next test information
    const addNewInfo = () => {
        setInfo(prev => [
            ...prev,
            { ...information, id: prev.length + 1 }
        ])
    }
    const makeQuestionForExam = () => {
        if (info.length === 1 && info[0].title === "" && info[0].totalCandidates === null && info[0].totalSlots === null && info[0].totalQuestionSet === null && info[0].startTime === "" && info[0].endTime === "" && info[0].duration === null && info[0].questionType === '') {

            return;
        }

        let questionSet = info.map(infoItem => {
            return {
                ...infoItem,
                questions: questionData
            }
        })
        console.log(questionSet)
        // first check if localstorage already have onlineTest data if have then get the data and parse it and add new questionSet to that data and set it to localstorage otherwise set questionSet to localstorage
        const storedTests = localStorage.getItem('onlineTests');
        if (storedTests) {
            const parsedTests = JSON.parse(storedTests);
            const updatedTests = [...parsedTests, ...questionSet];
            localStorage.setItem('onlineTests', JSON.stringify(updatedTests));
            return updatedTests;
        } else {
            localStorage.setItem('onlineTests', JSON.stringify(questionSet));
        }
    }
    useEffect(() => {
        console.log('info:', info)
        console.log('All Questions:', questionData)
        makeQuestionForExam()
    }, [questionData])
    return (
        <div>
            {/* track steps */}
            <Track activeTab={activeTab} />

            {/* basic information */}
            {activeTab === 'create' && <BasicInformation info={info[0]} updateInfo={updateInfo} />}

            {/* basic information detail */}
            {activeTab === 'detail' && <BasicInformationCardDetail info={info.at(-1)} goBack={goBack} />}

            {/* modal */}
            <Modal title={'Create Question'} onClose={modalOnClose} size={'7xl'} show={showModal} handleSave={() => {
                mcqFormRef.current?.save()
                modalOnClose()
            }}>
                <McqQuestionForm onSave={(data) => {
                    setQuestionData(prev => [...prev, data]);
                }} ref={mcqFormRef} />
            </Modal>
            <div className='flex flex-col justify-center items-center mt-5'>
                {
                    questionData.length > 0 &&
                    questionData.map((question, index) => (
                        <div className='w-238.5 mt-5' key={index}>
                            <McqQuestionCard question={question} />
                        </div>
                    ))

                }



            </div>
            <div className='bg-[#FFFFFF] mx-50  mt-5 p-5 rounded-2xl border border-[#D1D5DB] mb-5'>
                {confirmButtons && <div className='flex justify-between'>
                    <div>
                        <button className='bg-white border border-[#E5E7EB] h-12 w-40 opacity-100 gap-1.5 rounded-2xl py-3 px-8  cursor-pointer' >
                            Cancel
                        </button>
                    </div>
                    <div>
                        <button onClick={createOnlineTest} className='bg-[#6633FF] text-white border border-[#6633FF] h-12 opacity-100 gap-1.5 rounded-2xl py-3 px-8  cursor-pointer' >
                            Save & Continue
                        </button>
                    </div>
                </div>}
                {addQuestionAddButton && <button onClick={() => setShowModal(true)}
                    className='w-full bg-[#6633FF] p-4 rounded-2xl text-white  cursor-pointer'>Add Question</button>}
            </div>
        </div>
    )
}
export default CreateOnlineTest