import React from 'react'
import './latestPost.css'

export default function LatestPost({posts}) {
  return (
    
        <div className='postSummaryConatner'>
            <img className='postSummaryImg' src='https://improvedigitally.com/wp-content/uploads/2022/10/10-reasons-why-your-website-is-not-showing-up-on-google-750x448.webp' alt='' />
            <p className='postSummaryTitle'>
            {posts.title}
            </p>
        </div>

  )
}
