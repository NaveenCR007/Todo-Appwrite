import React from 'react'
import { useId } from 'react'

const Input = React.forwardRef(function Input({ lable, type = "text", className = '', ...props }) {
    const id = useId()

    return (
        <div className='w-full'>

            {lable && <lable className='text-black font-md'>{lable}:</lable>}

            <input
                type={type}
                className={`${className} `}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input
