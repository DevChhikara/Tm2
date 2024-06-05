import React from 'react'

const Button = ({ children, ...props }) => {
    return (
        <div>
            <button {...props} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">{children}</button>
        </div>
    )
}

export default Button