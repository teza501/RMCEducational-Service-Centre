import React, { useState } from 'react'
import './Navbar.css';
import { MdPhoneInTalk } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [showMediaIcon, SetMediaIcon] = useState(false)
  return (
    <>
    <nav className='main-nav'>
    <div className='hamburgerMenu'>
           <a href='#' onClick={() => SetMediaIcon(!showMediaIcon)}> <GiHamburgerMenu /></a>
    </div>
       <div className='logo'>
       <Link to="/"> <img src='https://improvedigitally.com/wp-content/uploads/elementor/thumbs/Logo-Transparent-pd6yjsvm5tx1ses4z8xuihv57hx69cyc9z9is4tnmg.png' alt='' /> </Link>
        </div>
      

        <div className={showMediaIcon ? "menu-link mobile-menu-link" : 'menu-link' }>
            <ul><li>
                <a href="#">
                Home 
                </a>
                </li>
                
                <li>
                <a href="#">
                Organic Growth
                </a>
                </li>
                <li>
                <a href="#">
                Marketing
                </a></li> 
                <li>
                <a href="#">
                Web development
                </a></li> 
                <li> 
                <a href="#">
                Company
                </a></li>
            </ul>
            
        </div>
        <div className='contact'>
            <ul className='number'>
                <li><MdPhoneInTalk className='phoneLogo'/></li>
                <li className='dial'>+91 98712 32887</li>
                <Link to="/contact">
                <button className='getAProposal'>Get a Proposal</button>
                </Link>
            </ul>
            
        </div>
        
    </nav>
    </>
  )
}
