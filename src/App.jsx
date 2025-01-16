import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Recipes from './pages/recipes'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './pages/contact'
import SignIn from './pages/signIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />}></Route>
        <Route path='/home' element={<>
        <Navbar></Navbar>
        <Home></Home>
        </>} />
        <Route path='/recipes' element={<>
        <Navbar></Navbar>
        <Recipes></Recipes>
        </>} />
        <Route path='/contact' element={<>
        <Navbar></Navbar>
        <Contact />
        </>} />
          </Routes>
          
          </BrowserRouter>
    </>
  )
}

export default App
