import React from 'react'
import './contact.css'
import {ImLocation2} from 'react-icons/im'
import {FiPhoneCall} from 'react-icons/fi'
import {MdEmail} from 'react-icons/md'



export const Contact = () => {
  return (
    <div className='content'>
        <div className='banner'>
            <h1>Contact</h1>
        </div>
        <div className='left-side'>
    <div className='heading'>
    <h2> We can't wait to<span> hear from you!</span></h2>
    <p>At Improve Digitally, we are always ready for new collaborations and opportunities. Our response team is available 24*7 to answer all your digital marketing and related queries. Get in touch with us as we would be more than happy to help you!!</p>

    <h2>Contact</h2>
    <div className='loc'>
      <ImLocation2 className='Contact-icon' /> <p>Jamia Nagar, Okhla, New Delhi, Delhi 110025</p>
    </div>
    <div className='call'>
     <FiPhoneCall className='Contact-icon' /> <p>+91 98712 32887</p>
    </div>
    <div className='mail'>
      <MdEmail  className='Contact-icon'/><p>info@improvedigitally.com</p>
    </div>

    </div>
    <div className='detatil'>
      <div className='Cbox'>
      <h1 className=' green'>350%</h1>
      <p>Boost your website traffic</p>
      </div>
      <div className='Cbox'>
      <h1 className=' purple'>153%</h1>
      <p>Boost your sales</p>
      </div>
      <div className='Cbox'>
      <h1 className=' orange'>500%</h1>
      <p>Boost your reach</p>
      </div>
      <div className='Cbox'>
      <h1 className=' green' >97%</h1>
      <p>Boost your overall ROI</p>
      </div>
      <div className='Cbox'>
      <h1 className=' orange'>133%
</h1>
      <p>Boost your brand awareness</p>
      </div>
      <div className='Cbox'>
      <h1 className=' purple'>558%
</h1>
      <p>Boost your online presence</p>
      </div>
    </div>
        </div>

        {/* right-side data */}
        <div className='right-side'>
            
        <form  className="ContactForm">
        <h3>Get in Touch</h3>
        <p>Let's discuss the needs and requirements of your business and achieve the goals. We provide the best-customized services that boost your overall revenue and ROI.</p>
            <input className='full_name' type="text" 
            placeholder='Full Name* '
            />
            <label>Please enter your full name</label>
            <input className='email' type="text" placeholder='Your@email.com'
             />
            <label>Please enter a valid email address</label>
            <input className='phone' type="text" placeholder='+91 88776 05417'
               />
        <label>Please enter Phone no</label>
        <input className='company' type="text" placeholder='Company Name '
               />
        <label>Please enter company name</label>

        <input className='website' type="text" placeholder='yoursite.com* '
               />
        <label>Please enter valid website Url</label>

        <textarea className='textarea' placeholder='message...'></textarea>

            <button className="ContactBtn" type='submit'>Submit</button>
        </form>
        </div>
       
    </div>
  )
}
