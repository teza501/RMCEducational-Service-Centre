import React, { useEffect, useState } from 'react'
import './blog.css'
import Post from './Post/Post'
import Subscribe from './subscribe/Subscribe';
import axios from 'axios'

export const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    const fetchPosts = async () =>{
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  },[])

  return (
    <div className='blog'>
        <div className='blogbanner'>
            <h1>Blogs</h1>
        </div>
    <div className='blog-left-side'>
      {
        posts.map((posts,index)=>(
          <Post  posts={posts} key={index}/>
        ))
      }
    
    </div>
    <div className='blog-right-side'>
        <Subscribe posts={posts} />
    </div>
    </div>
  )
}
