import React from 'react'
import LatestPost from '../latestPost/LatestPost'
import './subscribe.css'


export default function Subscribe({posts}) {
  return (
    <div className='subscribe'>
        <div className='subscribeContainer'>
            <h2>Learn and Grow!</h2>

            <input className='subInput' type='text' placeholder='Your@email.com' />
            <button className='subBtn'>Subscribe</button>
        </div>

        <div className='latestpost'>
        <div className='latestpostContainer'>
                <h2>Latest Post</h2>
            </div>
            {
              posts.map((posts,index) =>(
                <LatestPost posts={posts} key={index}/>
              ))
            }
            
        </div>
    </div>
  )
}
