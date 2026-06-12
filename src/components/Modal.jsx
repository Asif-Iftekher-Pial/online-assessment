import React from 'react'
import Button from './Button';
const sizeValues = {
    sm: '384px',
    md: '448px',
    lg: '512px',
    xl: '576px',
    '2xl': '672px',
    '3xl': '768px',
    '4xl': '896px',
    '5xl': '1024px',
    '6xl': '1152px',
    '7xl': '1280px',
}
function Modal({ title, onClose, children, size, show, handleSave, hideFooter }) {
    if (!show) return null;
    const maxWidth = sizeValues[size] || size || '512px'
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 bg-opacity-50'>
            <div className={`bg-white rounded-2xl p-6 w-full overflow-auto `}
                style={{ maxWidth }}
                onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button className='cursor-pointer' onClick={onClose}>✕</button>
                </div>

                {/* Body */}
                <div className="max-h-[60vh] overflow-auto px-6 py-2">
                    {children}
                </div>
                {!hideFooter && (
                    <div className="flex justify-end gap-4 mt-6 border-t border-gray-200 pt-4">
                        {/* Footer buttons */}
                        <div className="flex justify-end gap-3 mt-2 pt-4 border-t border-gray-100">
                            <button className="px-6 py-2.5 border border-[#6633FF] text-[#6633FF] rounded-xl text-sm font-medium cursor-pointer" onClick={onClose}>
                                Save
                            </button>
                            <button
                                onClick={handleSave}
                                className="px-6 py-2.5 bg-[#6633FF] text-white rounded-xl text-sm font-medium cursor-pointer"
                            >
                                Save & Add More
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Modal