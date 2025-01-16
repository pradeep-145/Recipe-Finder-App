import React from 'react'
import { useState } from 'react'
const Navbar = () => {
    const [menu, setMenu] = useState(false)
  return (
    <>
        <nav>
            <div className="mx-auto px-6 py-2 flex justify-between items-center bg-black bg-opacity-40 shadow-black shadow-md ">
                <a href="/home" className="text-3xl font-bold text-gray-800 ">Recipe</a>
                <div className="flex items-center space-x-4 max-md:hidden">
                    <a href="/home" className="text-gray-800 text-sm font-semibold">Home</a>
                    <a href="/recipes" className="text-gray-800 text-sm font-semibold">Recipes</a>
                    <a href="/contact" className="text-gray-800 text-sm font-semibold">Contact</a>
                    <a href="/" className="text-gray-800 text-sm font-semibold" onClick={() => {
                        localStorage.removeItem('email')
                    }}>Logout</a>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setMenu(!menu)} className="text-gray-800 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    {menu&&
                    <div className="absolute top-0 right-10 text-xl w-auto mt-14 bg-black bg-opacity-40 p-4">
                        <a href="/home" className="text-gray-800  font-semibold block">Home</a>
                        <a href="/recipes" className="text-gray-800  font-semibold block">Recipes</a>
                        <a href="/contact" className="text-gray-800 font-semibold block">Contact</a>
                        <a href="/" className="text-gray-800 font-semibold block" onClick={() => {
                            localStorage.removeItem('email')
                        }}>Logout</a>
                    </div>
                    }
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar