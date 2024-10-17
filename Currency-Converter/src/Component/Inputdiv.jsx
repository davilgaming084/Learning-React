import React from 'react'

const Inputdiv = ({ from, defauldAmount, handledefaut }) => {
    const handleDefaultByChild = (e) => {
        handledefaut(e.target.value)
    }
    return (
        <div id="container" className='bg-red-500'>
            <label htmlFor="" className='bg-black text-white p-2  w-16'>{from}</label>
            <input type="number" className='m-5' value={defauldAmount} onChange={handleDefaultByChild} />

            <select name="" id="" className='m-5'>
                <option value="">usd</option>
                <option value="">inr</option>
            </select>
        </div>
    )
}

export default Inputdiv