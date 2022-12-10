import React from 'react'
import { Check } from './CheckForm/Check'
import './home.css'
import {GrAddCircle} from 'react-icons/gr'
export const Home = () => {
  return (
    <>
    <div className='container'>
        <div className='left-side'>
        <Check />
        </div>
        <div className='right-side'>
            <img src='https://improvedigitally.com/wp-content/uploads/2021/10/laptop-home-2.webp' alt='' />
        </div>
    </div>
    {/* BussinesCommitment container */}
    
    <div className='container'>
        <div className='left-side'>
        <img className='image' src='https://improvedigitally.com/wp-content/uploads/2021/10/Grow-your-business-digitally.webp' alt='' />
    </div>
    <div className='right-side'>
    <h3>Our Business Commitment</h3>
    <h2>Grow your <span>business</span>digitally</h2>
    <div className='detatils'>
      <div className='box'>
      <h1 className=' green'>10x</h1>
      <p>Increase in Website Organic Traffic</p>
      </div>
      <div className='box'>
      <h1 className=' purple'>5x</h1>
      <p>Increase in Quality Conversions</p>
      </div>
      <div className='box'>
      <h1 className=' orange'>45%</h1>
      <p>Growth on Social Media</p>
      </div>
      <div className='box'>
      <h1 className=' green' >33%</h1>
      <p>Quality Conversions Through Social Media</p>
      </div>
      <div className='box'>
      <h1 className=' orange'>18x</h1>
      <p>Increase in Conversions Through Email</p>
      </div>
      <div className='box'>
      <h1 className=' purple'>50%</h1>
      <p>Higher Conversion for Local Business</p>
      </div>
    </div>
    <button className='btn'>Get free Consultations</button>

    </div>
    </div>

{/* part 3 of home page */}
    <div className='container'>
    <div className='left-side'>
       <h3>Organic Search Growth</h3>
       <h2>Enhance your <span>Organic Search</span> Visibility!</h2>
       <button className='btn'>Get Started</button>
    </div>
      <div className='right-side'>
        <img src='https://improvedigitally.com/wp-content/uploads/2021/10/Enhance-your-Organic-Search.webp' alt="" />
      </div>
    </div>

    {/* part 4 of home page */}
    <div className='services'>
      <h1>Increase organic <span> website traffic </span>
      and enhance your business web presence</h1>
    </div>
    <div className='ServiceContainer'>
      <div className='serviceBox'>
        <img src='https://improvedigitally.com/wp-content/uploads/2021/09/4th-1.png' alt='' />
        <h3>SEO Services</h3>
        <p>We have a team of expert SEO that conducts remarkably successful SEO campaigns in highly competitive sectors using our unique and best practices of blend technical and creative expertise in SEO.</p>
        <GrAddCircle className='addPost' />
      </div>
      <div className='serviceBox'>
      <img src='https://improvedigitally.com/wp-content/uploads/2021/09/3rd.png' alt='' />
        <h3>SEM Services</h3>
        <p>SEM is Search Engine Marketing you are paying for ads, our expert PPC team increases your leads, increase your revenue, and help your business get traffic faster and rank your page on the top of a search engine.</p>
        <GrAddCircle className='addPost'/>
      </div>
      <div className='serviceBox'>
      <img src='https://improvedigitally.com/wp-content/uploads/2021/09/1st.png' alt='' />
        <h3>SMO Services</h3>
        <p>Building a social presence is important and necessary but managing, optimising, growing and engaging with audiences is a hectic work our expert social media team are passionate and experienced in optimising and managing.</p>
        <GrAddCircle className='addPost'/>
      </div>
      <div className='serviceBox'>
      <img src='https://improvedigitally.com/wp-content/uploads/2021/09/2nd.png' alt='' />
        <h3>SMM Services</h3>
        <p>Social Media Marketing has become an integral part of the social strategy for business across industries. We provide digitally top-notch quality and targeted social media strategy which impact business growth through social media advertising and help you achieve your goals.</p>
        <GrAddCircle className='addPost'/>
      </div>
      <div className='serviceBox'>
      <img src='https://improvedigitally.com/wp-content/uploads/2021/09/5th.png' alt='' />
        <h3>Email Marketing</h3>
        <p>Email Marketing is all about communicating, building customer loyalty, expand business reach and connect with different audiences. Our expert Email Marketing team promotes sales, builds relationships, and supports a wide range of marketing initiatives.</p>
        <GrAddCircle className='addPost'/>
      </div>
      <div className='serviceBox'>
      <img src='https://improvedigitally.com/wp-content/uploads/2022/10/Website-Development.svg' alt='' />
        <h3>Web Development</h3>
        <p>Web development services support the creation of all varieties of web-based software and provide a positive online experience. In order to achieve high conversion and adoption rates, Improve Digitally professionally design, develop and provides continuous support for customer-facing and enterprise web apps.</p>
      <GrAddCircle className='addPost'/>
      </div>
    </div>

  
    </>


  )
}
