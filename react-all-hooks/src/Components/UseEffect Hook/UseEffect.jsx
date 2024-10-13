import React from 'react'
import { useEffect,useState } from 'react'
import Usestate from '../UseState Hook/Usestate'
const UseEffect = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        let dataFetchingApi = async () => {
            try {
                let response = await fetch("https://jsonplaceholder.typicode.com/posts")
                if (!response.ok) {
                    throw new Error("http error", response.status)
                }
                let data = await response.json()
                console.log(data[0].body);
                setdata(data)
                console.table(data)

            }
            catch (error) {
                console.log("fetch error", error.message)            }


        }
        dataFetchingApi()
    }, [])
    return (
    <>
        <div>UseEffect</div>
        {/* {data.length > 0 ? <p>{data[0].body}</p> : <p>Loading...</p>}   */}
        {data.length > 0 ? <p>{data[0].body}/</p> : <p> loading...</p>}
        {/* <p>{data[0].body}</p> */}
    </>
    )
}

export default UseEffect