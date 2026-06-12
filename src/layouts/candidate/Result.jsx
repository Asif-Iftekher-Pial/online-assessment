import React, { useEffect, useMemo, useState } from 'react'
import Modal from '../../components/Modal'
import { useNavigate, useParams } from 'react-router-dom';

function Result({ showResult, setShowResult, answers }) {
    const { id } = useParams();
    const questionData = localStorage.getItem('onlineTests') ? JSON.parse(localStorage.getItem('onlineTests')) : null;
    const question = questionData ? questionData.find(test => test.id === id) : null;
    const navigate = useNavigate();
    const [score, setScore] = useState(0);
    const onClose = () => {

        setShowResult(false);
        navigate('/candidate/dashboard');
        // clear timing 
        const examStartTime = localStorage.getItem('examStartTime');
        if (examStartTime) {
            localStorage.removeItem('examStartTime');
        }
    }
    const calculationRightAnswer = (question, selectedOption) => {

        if (question.questionType === "Radio") {
            const matchAns = question.options.find(option => option.id === selectedOption.selectedOptions);
            if (matchAns && matchAns.isCorrect) {
                setScore(prev => prev + 1);
            } else {
                setScore(prev => prev === 0 ? 0 : prev - 0.25);
            }
        }
        else if (question.questionType === "Checkbox") {
            calculatingCheckboxAnswer(question, selectedOption);
        }
    }
    const calculatingCheckboxAnswer = (question, selectedOption) => {
        let matchAnswers = []
        selectedOption.selectedOptions.map((ans) => {
            const matchAns = question.options.find(option => option.id === ans);
            if (matchAns) {
                matchAnswers.push(matchAns);
            }
        })
       const filterCorrectAnswersFromOptions = question.options.filter(option => option.isCorrect);
       const allCorrect = matchAnswers.every(item => item.isCorrect) && matchAnswers.length === filterCorrectAnswersFromOptions.length;
        if (allCorrect) {
            setScore(prev => prev + 1);
        } else {
            setScore(prev => prev === 0 ? 0 : prev - 0.25);
        }
        
    }
    useEffect(() => {
        if (!question || !answers) return null;
        answers.map((answer) => {
            answer.answers.map((ans) => {
                const findEachQuestion = question.questions.find(q => q.questionNumber === ans.questionId);
                calculationRightAnswer(findEachQuestion, ans);
            })
        })

    }, [])

    return (
        <div>
            <Modal show={showResult} hideFooter={true} onClose={onClose} size='3xl' title='Exam Result' handleSave={() => { }}>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl font-bold mb-4'>Congratulations!</h2>
                    <h2 className='text-xl font-bold mb-4'>Your Score: <span className='text-green-600'>{score.toFixed(2)}</span></h2>
                    <p className='text-gray-600'>You have successfully completed the exam.</p>
                </div>
            </Modal>
        </div>
    )
}

export default Result