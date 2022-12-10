import React from 'react'
import './post.css'

export default function Post({posts}) {
  return (
    <div className='post'>
        <img className='postImage' src='https://improvedigitally.com/wp-content/uploads/2022/10/10-reasons-why-your-website-is-not-showing-up-on-google-750x448.webp' alt='' />
        <div className='postInfo'>
            <span className='postTitle'>
            {posts.title}
            </span>
            <p className='postDesc'>
              {posts.desc}
            </p>
        </div>

    </div>
  )
}
