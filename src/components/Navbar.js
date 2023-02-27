import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/TradExpress.svg'

const Navbar = () => {
  return (
    <div className='nav'>
      <Link to="/"><img src={image} alt="" /></Link>


       
            
        <div className='word'><h6>Instant Buy /Sell</h6> 
        <h6>Learn</h6></div>
        <div className='link'>
        
        <Link to="About"> <button id='btn1'>LOG IN</button></Link>
        <Link to="Contact"> <button id='btn2'>Get Started</button></Link>
       
        {/* <ul>
          <li>
           
          </li>

        <li>
           
          </li>
          
          <li>
          
          </li>
          

          
        </ul> */}
      </div>
    </div>
  )
}

export default Navbar
