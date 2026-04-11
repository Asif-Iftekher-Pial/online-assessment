import React from 'react'

function McqQuestionCard({ question }) {
    const options = [
        { label: "A", text: "Dhaka", correct: true },
        { label: "B", text: "Chattogram", correct: false },
        { label: "C", text: "Rajshahi", correct: false },
        { label: "D", text: "Barishal", correct: false },
    ];

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-center px-5 py-3 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-800">Question 1</span>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 border border-gray-300 rounded-full px-3 py-1">MCQ</span>
                    <span className="text-xs text-gray-500 border border-gray-300 rounded-full px-3 py-1">1 pt</span>
                </div>
            </div>

            {/* Body */}
            <div className="px-5 pt-5 pb-2">
                <p className="text-sm font-semibold text-gray-900 mb-4">
                    What is the Capital of Bangladesh?
                </p>

                <div className="flex flex-col gap-2">
                    {options.map((opt) => (
                        <div
                            key={opt.label}
                            className={`flex items-center justify-between rounded-lg px-4 py-3 ${opt.correct
                                ? "bg-gray-100 border border-gray-200"
                                : ""
                                }`}
                        >
                            <span className="text-sm text-gray-800">
                                {opt.label}. {opt.text}
                            </span>
                            {opt.correct && (
                                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-5 py-3 border-t border-gray-200 mt-2">
                <button className="text-sm font-medium text-indigo-500 hover:text-indigo-700">
                    Edit
                </button>
                <button className="text-sm font-medium text-red-500 hover:text-red-700">
                    Remove From Exam
                </button>
            </div>

        </div>

    )
}

export default McqQuestionCard