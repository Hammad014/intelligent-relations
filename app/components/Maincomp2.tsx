import React from 'react'
import Button from '@mui/material/Button'

const Maincomp2 = () => {
  return (
    <>
    <div>
    <div className='flex justify-center text-center'
    
    >
    <div className='text-white mt-14'>
      
      <p className='text-lg'>PR that works while you sleep</p>
      <br/>
      <br/>
      <div className='flex gap-10 main-comp2'>
        <p className='text-2xl '>Our Clients Have <br/> Been Featured In</p>
        <img className='w-24 h-7 ' src="/imagesmain/Vector (4).png" alt="" />
        <img className='w-14 h-7' src="/imagesmain/Vector (5).png" alt="" />
        <img className='w-14 h-10' src="/imagesmain/Group 29.png" alt="" />
        <img className='w-28 h-9' src="/imagesmain/Group 30.png" alt="" />
        <img className='w-14 h-7' src="/imagesmain/Subtract.png" alt="" />
        <img className='w-28 h-4' src="/imagesmain/Group 31.png" alt="" />
      </div>
      <br/>
      <br/>
      <p className='text-xl'>Deploy. Go live and see results <br/> same day.</p>
      <br/>
      <br/>
      <Button style={{backgroundColor:"#7DF4DC"}} className='text-blue-700 btn font-semibold'  variant="contained">GET STARTED</Button>
      <br/>
      <br/>
      <p className='text-base'>It’s time to fire your PR firm</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default Maincomp2
