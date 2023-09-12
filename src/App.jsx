import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Blogs from './Blogs'

function App() {

  return (
    <>
     <div className='w-[90%] mx-auto'> 
        <Header></Header>
        <Blogs></Blogs>
     </div>
    </>
  )
}

export default App
