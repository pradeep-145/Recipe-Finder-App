import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav>
            <div className=" mx-auto px-6 py-2 flex justify-between items-center bg-black bg-opacity-40 shadow-black shadow-md">
                <a href="/home" className="text-3xl font-bold text-gray-800">Recipe</a>
                <div className="flex items-center">
                    <a href="/home" className="text-gray-800 text-sm font-semibold px-4">Home</a>
                    <a href="/recipes" className="text-gray-800 text-sm font-semibold px-4">Recipes</a>
                    <a href="/contact" className="text-gray-800 text-sm font-semibold px-4">Contact</a>
                    <a href="/" className="text-gray-800 text-sm font-semibold px-4" onClick={()=>[
                        localStorage.removeItem('email')
                    ]}>logout</a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar