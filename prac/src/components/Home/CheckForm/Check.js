import React from 'react'
// import { BussinesCommitment } from '../Business/BussinesCommitment'
import './check.css'
export const Check = () => {
  return (
    <div className='main'>
        <h3>Grow Digitally</h3>
        <h2>Boosts your <span>website traffic!</span></h2>

        <input className='mail' type="text" placeholder='Mail Address* ' />
        <input type="text" placeholder='yoursite.com*' />
        <button className='btn'> Check Now</button>
    </div>
  )
}
