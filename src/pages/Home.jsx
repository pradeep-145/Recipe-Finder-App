import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        if(!localStorage.getItem('email')){
            alert('You need to login first')
            window.location.href = '/'
        }
    }, [])

  return (
    <div className='flex flex-col font-bold justify-center items-center h-screen bg-black bg-opacity-40 p-4'> 
        <h1 className='text-4xl sm:text-6xl md:text-8xl text-black hover:bg-gradient-to-r from-black to-gray-500 hover:text-transparent duration-500 bg-clip-text'>Home</h1>
        
        <p className='text-xl sm:text-2xl md:text-3xl'>Welcome to our website</p>

    </div>
  )
}

export default Home