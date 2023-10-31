import React, { useState } from 'react'
import { addDoc,collection } from 'firebase/firestore'
import {auth,db} from '../Config/Firebase'
import { useNavigate } from 'react-router-dom'

const Npost = () => {

const [title, settitle] = useState('')
const [post, setpost] = useState('')

let navigate = useNavigate()



const docRef = collection(db, "posts")

const submit = async () => {
  if (title === '' || post === '') {
    alert('Fill in the fields');
  } else {
    try {
      await addDoc(docRef, {
        title,
        post,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
      });
      navigate('/')
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error(error);
    }
  }
};


return (
  <div className='px-5'>

    <div className='flex justify-between'>
      <span className='font-bold text-4xl '>New Post</span>
      <button  className='px-6 py-1 border-2 border-gray-600 font-semibold' onClick={submit}>Save</button>
    </div>

    <div class="mb-6 mt-6">
      <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
      <input value={title} onChange={(e)=>settitle(e.target.value)} type="text" id="default-input" class="bg-gray-50 outline-none border-2 border-gray-600 text-gray-900 text-sm  block w-full p-2.5"/>
    </div>  

    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 ">Content</label>
    <textarea value={post} onChange={(e)=>setpost(e.target.value)} id="message" rows="4" class="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50  border-2 border-gray-600 focus:ring-blue-500 focus:border-blue-500 " placeholder="Tell your story..."></textarea>
  
  </div>
  )
}

export default Npost