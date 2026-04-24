import React, { useState } from 'react'
import Button from '../../components/Button'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AnswarePaper } from '../../composables/AnswarePaper';


function ExamRoom() {
    const { id } = useParams();
    const { questionNumber, setQuestionNumber, answers, saveAnswers, skipQuestion } = AnswarePaper();

    const questionData = localStorage.getItem('onlineTests') ? JSON.parse(localStorage.getItem('onlineTests')) : null;
    const question = questionData ? questionData.find(test => test.id === id) : null;

    const handleSaveAndContinue = () => {
        setQuestionNumber(questionNumber + 1);

    }

    const currentQuestion = question ? question.questions[questionNumber] : null;
    const currentTime = Date.now();

    if (!localStorage.getItem('examStartTime')) {
        localStorage.setItem('examStartTime', currentTime.toString());
    }

    const startTime = Number(localStorage.getItem('examStartTime'));
    const duration = Number(question.duration);

    const examTimeOut = new Date(startTime + duration * 60000);
    const convertedTime = examTimeOut.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const getSelectedAnswer = (examId, questionId) => {
        const exam = answers.find(item => item.examId === examId);
        if (!exam) return null;

        const q = exam.answers.find(a => a.questionId === questionId);
        if (!q) return null;

        return q.selectedOptions;
    };
    const selected = getSelectedAnswer(id, currentQuestion.questionNumber);

    const [timeLeft, setTimeLeft] = useState(examTimeOut - currentTime);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            const remainingTime = Math.max(examTimeOut - now, 0);
            setTimeLeft(remainingTime);
        }, 1000);
        return () => clearInterval(interval);
    }, [examTimeOut]);

    return (
        <div className='flex flex-col  py-5  justify-center items-center '>
            <div className='bg-white lg:w-212.25  rounded-2xl mt-5 flex items-center justify-between p-4'>
                <div>
                    <span className='font-semibold text-sm'>Question ({questionNumber + 1} of {question.questions.length})</span>
                </div>
                <div className='ml-8'>
                    <div className='w-42 lg:w-55 bg-gray-200 flex justify-center items-center rounded-lg px-4 py-3 '>
                        <p>{Math.floor((timeLeft / 1000) / 60).toString().padStart(2, '0')}:{Math.floor((timeLeft / 1000) % 60).toString().padStart(2, '0')}</p>
                    </div>
                </div>
            </div>
            {JSON.stringify(answers)}
            <div className='bg-white w-85.75 lg:w-212.25 rounded-2xl mt-5'>
                <div className='p-5' key={currentQuestion?.questionNumber}>
                    <span className='font-semibold'>{currentQuestion ? `${currentQuestion.questionText} ?` : ''}</span>
                    <div>
                        {
                            currentQuestion && currentQuestion.options.map((option, index) => (
                                <div className='border border-gray-300 rounded-lg px-4 py-3 mt-5' key={option.id}>
                                    <div className='flex items-center '>

                                        <input
                                            type={currentQuestion.questionType === 'Checkbox' ? 'checkbox' : 'radio'}
                                            name={`question-${currentQuestion.questionNumber}`}
                                            checked={currentQuestion.questionType === 'Checkbox'
                                                ? (selected || []).includes(option.id)
                                                : selected === option.id}
                                            onChange={() => saveAnswers(id, currentQuestion, option.id)}
                                        />
                                        <span className="text-sm text-gray-500 ml-4">{option.text}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='grid-cols-1 lg:flex lg:justify-between mt-8 '>
                        <div className='mb-3'>
                            <button onClick={() => skipQuestion(id, currentQuestion)} className='bg-white border cursor-pointer border-gray-300 w-full  hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg'>
                                Skip this question
                            </button>
                        </div>
                        <div>
                            {
                                questionNumber === question.questions.length - 1 ? (
                                    <button
                                        className='bg-[#6633FF] cursor-pointer hover:bg-blue-600 w-full text-white font-medium py-2 px-4 rounded-lg'>
                                        Done
                                    </button>
                                ) : (
                                    <button onClick={handleSaveAndContinue}
                                        className='bg-[#6633FF] cursor-pointer hover:bg-blue-600 w-full text-white font-medium py-2 px-4 rounded-lg'>
                                        Save & Continue
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExamRoom