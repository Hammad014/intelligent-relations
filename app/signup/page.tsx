'use client'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Signup() {


  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State variables for error messages
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Function to validate form fields
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    let valid = true;
  
    // Reset all error messages before checking
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');
  
    if (!firstName) {
      setFirstNameError('First Name is required');
      valid = false;
    }
  
    if (!lastName) {
      setLastNameError('Last Name is required');
      valid = false;
    }
  
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    }
  
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    }
  
    return valid;
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    if (e.target.value) {
      setFirstNameError('');
    }
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    if (e.target.value) {
      setLastNameError('');
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value) {
      setPasswordError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can perform submission actions here
      setErrorMessage('');
       //     setSuccessMessage('Form submitted successfully.');
       window.location.href = '/dashboard';

      // Navigate to the dashboard page
      // You can use a Link or other navigation method here
    } else {
      setSuccessMessage('');
      setErrorMessage('Please fill in all required fields.');
    }
  };


  return (
  <>
   <Navbar />
      <div>
        <div className='max-w-6xl m-auto'>
          <div className='flex justify-between mt-12 mb-10'>
            <h1 className='text-white text-4xl font-bold'>Sign Up</h1>
            <img src='/Ellipse 29 (1).jpg' />
          </div>
        </div>
        <div style={{ borderRadius: '20px 20px 0 0' }} className='bg-white relative z-10 flex justify-center pt-24 gap-10'>
          <img className='absolute z-0 top-1/2 right-2/4' src='Group (2).png' />
          <div className='max-w-md'>
            <h1 className='text-4xl font-semibold'>Get started, Get noticed</h1>
            <p className='text-lg font-semibold leading-10'>Try our full PR platform</p>
            <p className='text-lg font-semibold'>start pitching within 90 seconds</p>
            <br />
            <ul className='list-disc pl-4 font-light'>
              <li>Create your PR campaign and reach relevant publications and journalists</li>
              <li>Get your company news and talking points to the press</li>
              <li>Schedule interviews and follow up with journalists</li>
            </ul>
          </div>
          <div className="max-w-md p-4">
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      {successMessage && <p className="text-green-600">{successMessage}</p>}
            <form onSubmit={handleSubmit} style={{ backgroundColor: '#f5f5f5' }} className="shadow-md rounded-xl px-8 pt-4 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName"></label>
                <input
                  className="rounded-3xl w-full py-2 px-8 h-14 placeholder-black text-black"
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleFirstNameChange}
                />
                
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName"></label>
                <input
                  className="rounded-3xl w-full py-2 px-8 h-14 placeholder-black text-black"
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleLastNameChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"></label>
                <input
                  className="rounded-3xl w-full py-2 px-8 h-14 placeholder-black text-black"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"></label>
                <input
                  className="rounded-3xl w-full py-2 px-8 h-14 placeholder-black text-black"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
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
                  style={{ backgroundColor: "#7DF4DC" }}
                  className="text-blue-700 h-14 font-bold py-2 px-4 rounded-lg mt-2 w-full bg-white"
                  type="submit"
                  onClick={handleSubmit}
                >
                  START
                </button>
              
            </form>
          </div>
        </div>
      </div>
      <div className='relative z-10'>
      <Footer />
      </div>
    </>
  );
}
