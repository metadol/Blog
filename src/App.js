import React, { useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom"
import Npost from './Components/Npost'
import Vpost from './Components/Vpost'

const App = () => {

  const [user, setuser] = useState(false) ;

  return (
    <div className='max-w-3xl mx-auto px-4 sm:px-6 lg-px-8 '>
     <Header u={user} s={setuser}/>
     <Routes>
          <Route path="/" element={ <Home u={user}/> } />
          <Route path="/newpost" element={ <Npost/> } />
          <Route path="/post/:id" element={ <Vpost u={user}/> } />
     </Routes> 
    </div>

  )
}

export default App