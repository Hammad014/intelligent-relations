"use client"

import React from 'react'
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const router = useRouter();

  return (
    <>
    <div className='flex flex-wrap justify-center align-middle navbar pt-3'>
      <div className='align-middle'>
        <img src='/Group 38 (1).png'/>
        </div>
        <div  className='flex align-middle right-nav'>
          <ul className='text-white list-none flex cursor-pointer'>
       <Link href='/page'> <li className='font-semibold'>About</li></Link>
        <li>How We Work</li>
        <li>Pricing</li>
        <li>Blog</li>
        <li>Contact</li>
        </ul>
       <div className='flex align-middle gap-5'>
        <Link href="/signup">
        <Button style={{border:"0.5px solid white"}} className='text-white btn font-semibold' variant="outlined">LOGIN</Button></Link>
        
          <Button onClick={() => router.push('../signup')} style={{backgroundColor:"#7DF4DC"}} className='text-blue-700 btn font-semibold'  variant="contained">GET STARTED</Button>
        
        </div>
        </div>
         
    </div>
    <p className='text-white text-right font-thin mr-6 mt-5'>Questions? (833) 317-6278</p>
    </>
  )
}

export default Navbar