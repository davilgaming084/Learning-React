import React, { useId } from 'react'

export const Input = React.forwardRef(function Input({ lable, type = "text", className = "", ...props }, ref) {
    const id = useId()
    return (
        <div>
            {lable && <lable htmlfor={id}>{lable}</lable>}
            <input type={type} className={`${className}`} ref={ref} {...props} id={id} />
        </div>
    )
})
