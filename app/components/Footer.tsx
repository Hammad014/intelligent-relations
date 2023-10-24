import React from 'react';
import Button from '@mui/material/Button'

const Footer = () => {
  return (
    <>
    <div className='' style={{maxWidth:"100%",backgroundColor:"#222222"}}>
    <div className='text-white m-auto' style={{maxWidth:"85%"}}>
        <div className='flex-col text-center pt-20'>
      <h1 className='text-4xl font-semibold'>Request Early Access</h1>
      <br/>
      <p className='text-base'>Get Exclusive access to intelligent<br/> relations before the competition</p>
      <br/>
      <Button style={{backgroundColor:"#7DF4DC"}} className='text-blue-700 btn font-semibold mb-16'  variant="contained">GET STARTED</Button>
      </div>
      <hr/>
      <div className='flex justify-center mt-10'style={{marginRight:"57rem"}}>
   <img src='/Group 38 (1).png'/>
   </div>

   <div className='flex justify-center gap-40 mt-10 ml-20'>
  <div className='leading-8 font-normal text-sm'>
   <p>About Us</p>
   <p>How We Work?</p>
   <p>Blog</p>
   </div>
   <div className='leading-8 font-normal text-sm'>
   <p>Pricing</p>
   <p>Contact</p>
   </div>
   <div className='leading-8 font-normal text-sm'>
   <p>Getting in Touch</p>
   <p className='font-semibold'>office@inteligentrellations.com</p>
   <p className='font-semibold'>(833) 317-6278</p>
   </div>
   </div>
<div className='flex justify-center' style={{marginRight:"55rem"}}>
   <p className='mt-20 pb-10 font-normal text-sm'>Copyright 2020 Intelligent Relations</p>
   </div>
    </div>
    </div>
    </>
  )
}

export default Footer
