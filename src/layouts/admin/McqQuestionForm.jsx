import React, { forwardRef, useImperativeHandle } from 'react'
import { useState } from 'react'

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E', 'F']

const McqQuestionForm = forwardRef(({ questionNumber = 1, onSave }, ref) => {
    const [score, setScore] = useState(1)
    const [questionType, setQuestionType] = useState('Checkbox')
    const [questionText, setQuestionText] = useState('')
    const [options, setOptions] = useState([
        { id: 1, text: '', isCorrect: false },
        { id: 2, text: '', isCorrect: false },
        { id: 3, text: '', isCorrect: false },
    ])

    const addOption = () => {
        if (options.length >= 6) return
        setOptions([...options, { id: Date.now(), text: '', isCorrect: false }])
    }

    const removeOption = (id) => {
        if (options.length <= 2) return   // minimum 2 options
        setOptions(options.filter(o => o.id !== id))
    }

    const updateOptionText = (id, text) => {
        setOptions(options.map(o => o.id === id ? { ...o, text } : o))
    }

    const toggleCorrect = (id) => {
        if (questionType === 'Radio') {
            // only one can be correct — deselect all, select clicked
            setOptions(options.map(o => ({ ...o, isCorrect: o.id === id })))
        } else {
            // checkbox — toggle freely
            setOptions(options.map(o => o.id === id ? { ...o, isCorrect: !o.isCorrect } : o))
        }
    }

    const handleSave = () => {
        const data = { questionNumber, score, questionType, questionText, options }
        onSave?.(data)
    }
    // expose save to parent
    useImperativeHandle(ref, () => ({
        save: handleSave
    }))
    return (
        <div className="flex flex-col gap-4">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#6633FF] text-white flex items-center justify-center text-xs font-semibold">
                        {questionNumber}
                    </div>
                    <span className="font-semibold text-gray-800">Question {questionNumber}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Score:</span>
                        <input
                            type="number"
                            min={1}
                            value={score}
                            onChange={e => setScore(Number(e.target.value))}
                            className="w-14 border border-gray-200 rounded-lg px-2 py-1 text-sm text-center"
                        />
                    </div>
                    <select
                        value={questionType}
                        onChange={e => setQuestionType(e.target.value)}
                        className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm"
                    >
                        <option value="Checkbox">Checkbox</option>
                        <option value="Radio">Radio</option>
                        <option value="Text">Text</option>
                    </select>
                </div>
            </div>

            {/* Question text */}
            <textarea
                value={questionText}
                onChange={e => setQuestionText(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#6633FF]/30"
                rows={3}
                placeholder="Type your question here..."
            />

            {/* Options */}
            <div className="flex flex-col gap-3">
                {options.map((option, index) => (
                    <div key={option.id}>
                        {/* Option header */}
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-500">
                                    {OPTION_LABELS[index]}
                                </div>
                                {questionType !== 'Text' && (
                                    <div className='flex justify-center items-center'>
                                        <input
                                            type={questionType === 'Checkbox' ? 'checkbox' : 'radio'}
                                            checked={option.isCorrect}
                                            onChange={() => toggleCorrect(option.id)}
                                            className="accent-[#6633FF]"
                                        />
                                        <span className="text-sm text-gray-500 ml-2">Set as correct answer</span>
                                    </div>
                                )}

                            </div>
                            <button
                                onClick={() => removeOption(option.id)}
                                className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer"
                            >
                                {/* trash icon */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
                                </svg>
                            </button>
                        </div>

                        {/* Option text input */}
                        <textarea
                            value={option.text}
                            onChange={e => updateOptionText(option.id, e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#6633FF]/30"
                            rows={2}
                            placeholder={`Option ${OPTION_LABELS[index]}`}
                        />
                    </div>
                ))}
            </div>

            {/* Add option */}
            {options.length < 6 && (
                <button
                    onClick={addOption}
                    className="flex items-center gap-1.5 text-[#6633FF] text-sm font-medium w-fit cursor-pointer"
                >
                    <span className="text-lg leading-none">+</span> Another option
                </button>
            )}


        </div>
    )
})

export default McqQuestionForm