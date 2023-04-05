import React from 'react'

function Header() {
  return (
    <div className='header'>
      <div className='links'>
      <a href="https://mail.google.com/mail/?authuser=0&ogbl">Gmail</a>
      <a href="https://www.google.com.ng/imghp?hl=en&authuser=0&ogbl">Images</a>
      </div>
      
      <div className='images'>
      <img src="/images/svgexport-7.png" alt="" />
      <img src="https://lh3.googleusercontent.com/ogw/AOh-ky0AJnnRlSYF6_QePskAZKYUOdqyWLLLX_5jwgrjyA=s32-c-mo" alt="" className='profile-image' />
      </div>
       
    </div>
  )
}

export default Header