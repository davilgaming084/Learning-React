import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()    
  return (
    <>
    <div>Github</div>
    <img 
        src={data.avatar_url}
        alt={`${data.login}'s avatar`}
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
    />
    <p>{data.followers} followers</p>
    </>
  )
}

export default Github