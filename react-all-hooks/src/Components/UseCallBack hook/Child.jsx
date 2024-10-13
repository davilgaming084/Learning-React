import React from 'react'
import { memo  } from 'react';

const Child = ({adjective, changeAdjective}) => {
    console.log("child is run");
    
  return (
    <>
    <div>i am a {adjective} child </div>
    <button onClick={()=>{changeAdjective()}}> child btn {changeAdjective()}</button>
    </>
  )
}

export default memo(Child)