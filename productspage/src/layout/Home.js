import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
const Home = () => {
const [Fakedata,setFakedata]=useState({})
      useEffect(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setFakedata(()=>{
                  console.log("data==>",json)
                  return{
                    data:json    
                  }}))
      },[])
  return (
    <>
    <div className='grid-container'>
    {Fakedata?.data?.map((x,i)=><Card key={i} x={x}/>)}
    </div>

    </>
  )
}

export default Home