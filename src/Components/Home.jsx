import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs } from 'firebase/firestore'
import { db } from '../Config/Firebase'
import Loading from './Loading'


const Home = ({u}) => {

 const [posts, setposts] = useState([])

 const postref = collection(db,'posts')

 const getpost = async ()=>{
  const data = await getDocs(postref)
  setposts(data.docs.map((d)=>({...d.data(),id:d.id})))
 }

 useEffect(()=>{
  getpost();
 })

  return (
    posts?(
    <div className='px-5'>
       <div className=' flex justify-end'>
         {u&&<Link className='px-5 py-1 border-2 border-gray-600 font-semibold mb-6' to={'/newpost'}>NewPost</Link>}
       </div>
       {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <div key={post.id} className=" border-2 border-gray-600 p-4   mb-4">
            <h2 className="text-2xl font-bold mb-2 capitalize">{post.title}</h2>
            <p className="text-gray-500 italic"> {post.author.name}</p>
            <p className="text-gray-700 mb-2  line-clamp-2 ">{post.post}</p>
          </div>
        </Link>
      ))}
    </div>
    ):<Loading/>
  )
}

export default Home