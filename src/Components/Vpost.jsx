import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { collection,deleteDoc,doc, getDocs ,updateDoc} from 'firebase/firestore'
import {auth, db } from '../Config/Firebase'
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai'
import Loading from './Loading'

const Vpost = ({u}) => {

  const {id}= useParams()  

  const [post, setPost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState('');

  let Navigate = useNavigate()

  useEffect(() => {
    const fetchPost = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve,1000));
        const postRef = collection(db, 'posts');
        const querySnapshot = await getDocs(postRef);

        querySnapshot.forEach((doc) => {
          if (doc.id === id) {
            setPost(doc.data());
            setEditedPost(doc.data().post)
            
          }
        });
      } catch (error) {
        console.error('Error fetching post:', error);
      } 
    };

    fetchPost();
  }, [id]);

  const del =async()=>{
    const postdoc = doc(db,'posts',id)
    await deleteDoc(postdoc)
    Navigate('/')
  }

  const docRef = doc(db, "posts", id);

  const save =async()=>{
    setIsEditing(!isEditing)
    try {
      await updateDoc(docRef, { post: editedPost });
      Navigate('/')
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }

  }
  
  const edi = async () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className='px-5'>   
    {post ? (
      <div className=' border-gray-900'>
        <h2 className="text-6xl font-black mb-5 capitalize">{post.title}</h2>
        <div className='flex justify-between'>
            <p className="text-gray-800 text-xl font-bold"> {post.author.name}</p>
            {u && post.author.id ===auth.currentUser.uid && !isEditing ? (
                 <div className='flex flex-row gap-5'>
                  <AiOutlineEdit size={20} onClick={edi} className='cursor-pointer'/>
                  <AiOutlineDelete size={20} onClick={del} className='cursor-pointer'/>
                  </div>
                  ) : isEditing ? ( 
                  <div className='flex gap-x-4 '>
                    <button className='text-gray-400 text-xs' onClick={()=>setIsEditing(false)}>Back</button>
                    <button className='px-4 py-1 border-2 border-gray-600 text-xs font-semibold ' onClick={save}>Save</button>
                  </div>) : null
              }
        </div>
        {isEditing ? (
          <textarea
            className="text-gray-700 mb-2 mt-4 pt-4 w-full overflow-hidden h-60 md:h-40 resize-none px-2 border-2 border-gray-600"
            value={editedPost}
            onChange={(e) => setEditedPost(e.target.value)}
          />) : (<p className="text-gray-700 mb-2 mt-4 pt-4 border-t-2 border-gray-200">{post.post}</p>
        )}
      </div>) : (<Loading/>)
    }
   </div>
  )
}

export default Vpost