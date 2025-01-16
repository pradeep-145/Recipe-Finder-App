import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const signIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const validate = (e) => {
        e.preventDefault()
        if (email === 'sample@gmail.com' && password === 'password') {
            console.log('Logged in')
            localStorage.setItem('email', email)
            navigate('/home')
        } else {
            alert('Invalid email or password')
        }
    }

    return (
        <div className='items-center justify-center flex flex-col h-screen w-screen bg-black bg-opacity-85 p-4'>
            <div className='h-auto w-full max-w-md bg-black p-8 rounded-lg flex items-center justify-center flex-col bg-opacity-30 shadow-black shadow-lg'>

            <h1 className='font-bold text-3xl text-white'>Sign In</h1>
            <form className='flex flex-col justify-center items-center mt-5 gap-6 w-full'>
               
                <input type="email" id="email" name="email" className='border-2 border-black hover:border-white p-3 px-4 rounded-lg w-full' onChange={(e) => {
                    setEmail(e.target.value)
                }} placeholder='Email'/>
                
                <input type="password" id="password" name="password" className='border-2 border-black hover:border-white p-3 px-4 rounded-lg w-full'
                onChange={(e) => { setPassword(e.target.value) }} placeholder='Password'
                />
                <button type="submit" onClick={validate} className='bg-black text-white py-3 px-6 rounded-full hover:bg-white hover:text-black duration-200 w-full'>Sign In</button>
            </form>
                </div>
        </div>
    )
}

export default signIn