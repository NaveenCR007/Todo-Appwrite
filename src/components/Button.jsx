import React from 'react'

function Button({ children, bgColor = 'bg-blue-400', type = 'button', textColor = 'text-white', className = '', ...props }) {

    return (
        <div>
            <button
                type={type}
                className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} 
                {...props}
            >

                {children}
            </button>
        </div>
    )
}

export default Button
