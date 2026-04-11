const radiusValues = {
    none: '0px',
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    '2xl': '16px',
    '3xl': '24px',
    full: '9999px',
}

function Button({ title, outlined, rounded }) {
    const borderRadius = radiusValues[rounded] || rounded || '8px' // fallback lg

    const baseClass = 'h-12 opacity-100 gap-1.5 py-3 px-8 cursor-pointer'
    const variantClass = outlined
        ? 'bg-white border border-[#6633FF] text-[#6633FF]'
        : 'bg-[#6633FF] text-white'

    return (
        <button
            className={`${baseClass} ${variantClass}`}
            style={{ borderRadius }}
        >
            {title}
        </button>
    )
}

export default Button