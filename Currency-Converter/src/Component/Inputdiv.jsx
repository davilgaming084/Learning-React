import React from 'react'

const Inputdiv = ({ LABLE, AMOUNT, SET_ON_AMOUNT_CHNAGE, SELECT_CURRENCY = [], DEFAULT_SELECT_VALUE, SET_ON_DEFAULT_SELECT_VALUE , READONLY}) => {
  return (
    <div>
      <div>
        <label className='text-white m-2' htmlFor="">{LABLE}</label>
        <input type="number" value={AMOUNT} onChange={(e) => { SET_ON_AMOUNT_CHNAGE(Number(e.target.value))}} readOnly={READONLY} />
        <select name="" id="" className='text-block m-2' value={DEFAULT_SELECT_VALUE} onChange={(e) => SET_ON_DEFAULT_SELECT_VALUE(e.target.value)}>
          {/* <option value=""> aman</option> */}
          {SELECT_CURRENCY.map((allcurrency) => <option key={allcurrency} value={allcurrency}>{allcurrency}</option>)}
        </select>
      </div>

    </div>
  )
}

export default Inputdiv