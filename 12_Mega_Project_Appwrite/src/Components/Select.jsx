import React, { useId } from 'react'

const Select = ({
    options = [],
    lable,
    classname = "",
    ...props
}, ref) => {
    const id = useId()
    return (

        <div className='w-full'>
            {lable && <label htmlFor={id} className=''></label>}
            <select name="" id={id} ref={ref} {...props} className={`${classname}`}   >


                {options?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)