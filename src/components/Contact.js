import React from 'react'
import '../style/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <h2>Welcome!</h2>
      <div className='corn'><h5 id='co'>Individual</h5><h5 id='coo'>Business</h5></div>
      <div className='inp'>
      <input type="text"
      placeholder='Username'/>
      <input type="text"
      placeholder='Full Name' />
      <input type='email'
      placeholder='Email' />
      <input type='tel'
      placeholder='Phone Number' />
      <input type="text"
      placeholder='Referral Code (optional)' />
      </div>
      <p>By clicking the Sign Up button below, you agree to TradExpress <span>terms and service</span> </p>
      <button>Sign Up</button>
      <p>Already have an account ? <span>Click here</span></p>
    </div>
  )
}

export default Contact
