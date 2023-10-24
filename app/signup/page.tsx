import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Signup() {
  return (
  <>
  <Navbar/>
    <div>
      <div className='max-w-6xl m-auto'>
      <div className='flex justify-between mt-12 mb-10'>
      <h1 className='text-white text-4xl font-bold'>Sign Up</h1>
      <img src='/Ellipse 29 (1).jpg'/>
      </div>
      </div>
      <div style={{borderRadius: '20px 20px 0 0' }} className='bg-white relative z-0 flex justify-center pt-24 gap-10'>
      <img className='absolute z-0 top-1/2 right-2/4' src='Group (2).png'/>
        <div className='max-w-md'>
        <h1 className='text-4xl font-semibold'>Get started, Get noticed</h1> 
        <p className='text-lg font-semibold leading-10'>Try our full PR platform</p>
        <p className='text-lg font-semibold'>start pitching within 90 seconds</p>
        <br/>
        <ul className='list-disc pl-4 font-light'>
          <li>Create your PR campaign and reach relevant publications and journalists</li>
          <li>Get your company news and talking points to the press</li>
          <li>Schedule interviews and follow up with journalists</li>
        </ul>
        </div>
      
      
      <div className="max-w-md p-4">
      <form style={{backgroundColor:'#f5f5f5'}} className="shadow-md rounded-xl px-8 pt-4 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          </label>
          <input
  className="rounded-3xl w-full py-2 px-8 h-14 placeholder-black text-black"
  id="firstName"
  type="text"
  name="firstName"
  placeholder="First Name"
/>

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          </label>
          <input
            className="rounded-3xl w-full py-2 px-8 h-14 placeholder-black text-black"
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          </label>
          <input
            className="rounded-3xl w-full py-2 px-8 h-14 placeholder-black text-black"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          </label>
          <input
            className="rounded-3xl w-full py-2 px-8 h-14 placeholder-black text-black"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <p className="text-sm text-gray-600 font-light">
          Yes, I’d like to receive helpful resources like tutorials, templates, and the latest PR advice, as well as invitations to IR events. (You can opt out any time.) View our privacy policy.
        </p>
        <button
  className="flex justify-center items-center text-black h-14 rounded-lg font-normal py-2 px-4 mt-4 w-full bg-white shadow-md"
  type="submit"
>
  <img src="/image 6.png" className="mr-2" alt="LinkedIn Logo" /> Start using LinkedIn
</button>
<button
  className="flex justify-center items-center text-black h-14 font-normal py-2 px-4 rounded-lg mt-2 mb-3 w-full bg-white shadow-md"
  type="submit"
>
  <img src="/image 7.png" className="mr-2" alt="Google Logo" /> Start using Google
</button>
<button
style={{backgroundColor:"#7DF4DC"}}
  className="text-blue-700 h-14 font-bold py-2 px-4 rounded-lg mt-2 w-full bg-white "
  type="submit"
>
  START
</button>
<p className='font-extralight mt-2 text-center'>By signing up, you agree to our terms of use
</p>
      </form>
    </div>
    </div>
    </div>
    <div className='relative z-20'>
    <Footer/>
    </div>
    </>
  );
}
