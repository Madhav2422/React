import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Madhav2422')
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center text-white text-3xl bg-gray-600 m-4'>Github followers:{data.followers}
    <img  src={data.avatar_url} alt="Git picture " width={300}/>
    </div>
  )
}

export default Github

export const githubInfolder= async ()=>{
    const res= await   fetch('https://api.github.com/users/Madhav2422')
    return res.json()
}