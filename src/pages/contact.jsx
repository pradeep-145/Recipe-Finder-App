import React, { useEffect } from 'react'

const contact = () => {
    useEffect(() => {
        if(!localStorage.getItem('email')){
            alert('You need to login first')
            window.location.href = '/'
        }
    }
    )
  return (
    <div className='flex flex-col gap-5 font-bold justify-center items-center h-screen bg-black bg-opacity-40 p-14'>
        <h1 className='text-6xl' >Contact</h1>
        <p className='text-3xl'>Get in touch with us</p>
        <p className='border-2 border-black bg-white px-4 py-2 hover:bg-black hover:bg-opacity-15 duration-300 rounded-lg'>pradeepsakthis.22cse@kongu.edu</p>
    </div>
  )
}

export default contact