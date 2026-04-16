import React, { useState } from 'react'
import Button from '../../components/Button'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function ExamRoom() {
    const { id } = useParams();
    const [questionNumber, setQuestionNumber] = useState(0);
    console.log(id)
    const questionData = localStorage.getItem('onlineTests') ? JSON.parse(localStorage.getItem('onlineTests')) : null;
    console.log(questionData)
    const question = questionData ? questionData.find(test => test.id === id) : null;
    console.log(question)

    const handleSaveAndContinue = () => {
        setQuestionNumber(questionNumber + 1);
    }
    const currentQuestion = question ? question.questions[questionNumber] : null;
    console.log('currentQuestion', currentQuestion)
    useEffect(() => {
        console.log(questionNumber)
    }, [questionNumber])

    return (
        <div className='flex flex-col  py-5  justify-center items-center '>
            <div className='bg-white lg:w-212.25  rounded-2xl mt-5 flex items-center justify-between p-4'>
                <div>
                    <span className='font-semibold text-sm'>Question ({questionNumber+1} of {currentQuestion?.options.length})</span>
                </div>
                <div className='ml-8'>
                    <div className='w-42 lg:w-55 bg-gray-200 flex justify-center items-center rounded-lg px-4 py-3 '>
                        <p>20</p>
                    </div>
                </div>
            </div>
            <div className='bg-white w-85.75 lg:w-212.25 rounded-2xl mt-5'>
                <div className='p-5'>
                    <span className='font-semibold'>{currentQuestion ? `${currentQuestion.questionText} ?` : ''}</span>
                    <div>
                        {
                            currentQuestion && currentQuestion.options.map((option, index) => (
                                <div className='border border-gray-300 rounded-lg px-4 py-3 mt-5' key={option.id}>
                                    <div className='flex items-center '>
                                        <input
                                            type={currentQuestion.questionType === 'Checkbox' ? 'checkbox' : 'radio'}
                                            onChange={() => { }}
                                            className="rounded-lg border border-gray-300 bg-white "
                                        />
                                        <span className="text-sm text-gray-500 ml-4">{option.text}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='grid-cols-1 lg:flex lg:justify-between mt-8 '>
                        <div className='mb-3'>
                            <button className='bg-white border cursor-pointer border-gray-300 w-full  hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg'>
                                Skip this question
                            </button>
                        </div>
                        <div>
                            <button onClick={handleSaveAndContinue}
                                className='bg-[#6633FF] cursor-pointer hover:bg-blue-600 w-full text-white font-medium py-2 px-4 rounded-lg'>
                                Save & Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExamRoom