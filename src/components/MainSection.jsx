import React from 'react'
import Buttons from './Buttons'
import SearchInput from './SearchInput'

function MainSection() {
  return (
    <div>
      <img src="/images/google-logo.png" alt="Google logo"  className='goog-image'/>
      <SearchInput />
      <Buttons />
    </div>
  )
}

export default MainSection