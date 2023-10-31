import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {auth,provider} from '../Config/Firebase'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import Home from './Home'

const Header = ({u,s}) => {

let navigate = useNavigate()
const [photo, setphoto] = useState('')
const [drop, setdrop] = useState(false)

const signin =()=>{
   signInWithPopup(auth, provider).then(r=>{
   const user = auth.currentUser
   setphoto(user.photoURL);
   s(true)
  })
}

const signout=()=>{
    signOut(auth).then(()=>{
        s(false)
        setdrop(false)
        navigate('/')
    })
  }


  return (
    <>
      <nav className='p-5 mb-12'>
        <div className='flex justify-between'>
          <Link to={'/'} className='font-bold text-3xl'>KBlog</Link>
            {u ? (
              <div className="relative">
                <img onClick={() => setdrop(!drop)} className="w-10 h-10 rounded-full cursor-pointer" src={photo} alt="User"></img>
                {drop && (
                  <div className="absolute right-0 mt-2 w-24 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                   <button onClick={signout} className="text-gray-700 block w-full px-4 py-2 text-sm">Sign out</button>
                 </div> )
                }
              </div>
             ) : (
              <button className='px-5 py-1 border-2 border-gray-600 font-semibold' onClick={signin}>Login</button>
            )}
        </div>
      </nav>
    </>
  )
}

export default Header

 

