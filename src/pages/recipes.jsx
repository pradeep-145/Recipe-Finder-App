import axios from 'axios'
import React, { useEffect } from 'react'

const Recipes = () => {
    const [recipes, setRecipes] = React.useState([])
    const [search, setSearch] = React.useState('')
    useEffect(()=>{
        if(!localStorage.getItem('email')){
            alert('You need to login first')
            window.location.href = '/'
        }
        const fetchRecipes = async ()=>{
            const result = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
            setRecipes(result.data.meals)
        }
        fetchRecipes()
    }
    ,[])


  return (
    <div className='flex flex-col font-bold justify-center items-center h-auto bg-black bg-opacity-40 p-14'>
        <h1 className='text-6xl'>Recipes</h1>
        <p className='mt-4 '>Check out our amazing recipes</p>
        <input type="text" className='border-2 mt-2 border-black hover:border-white  p-3 px-7 rounded-lg' onChange={(e)=>{
            setSearch(e.target.value)
        }} />
        <button className='bg-black mt-4 text-white py-3 px-12 rounded-full hover:bg-white hover:text-black duration-200' onClick={async ()=>{
            const result = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            setRecipes(result.data.meals)
        }}>Search</button>
        <div className='grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 mt-5 gap-10'>
            {recipes.map((recipe)=>{
                return(
                     <div key={recipe.idMeal} className='border-2 flex flex-col justify-center items-center gap-5 rounded-lg shadow-black hover:shadow-lg border-black p-5 hover:bg-black hover:text-white hover:scale-105 duration-300'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className='rounded-lg' />
                    <h1>{recipe.strMeal}</h1>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Recipes