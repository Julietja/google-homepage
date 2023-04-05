import React from 'react'
import LanguageLink from './LanguageLink'

function Footer() {
  return (
    <div className='footer'>
      <p>Google offered in:</p>
      <LanguageLink 
      link = "https://www.google.com/setprefs?sig=0_kdS5GXgDOdDunIyBQtYE0uhDZwg%3D&hl=ha&source=homepage&sa=X&ved=0ahUKEwj0wIHb25z-AhW0RKQEHYtxB9MQ2ZgBCBM"
      name = "Hausa" />

      <LanguageLink 
      link = "https://www.google.com/setprefs?sig=0_kdS5GXgDOdDunIyBQtYE0uhDZwg%3D&hl=ig&source=homepage&sa=X&ved=0ahUKEwj0wIHb25z-AhW0RKQEHYtxB9MQ2ZgBCBQ"
      name = "Igbo" />

      <LanguageLink 
      link = "https://www.google.com/setprefs?sig=0_kdS5GXgDOdDunIyBQtYE0uhDZwg%3D&hl=yo&source=homepage&sa=X&ved=0ahUKEwj0wIHb25z-AhW0RKQEHYtxB9MQ2ZgBCBU"
      name = "Èdè Yorùbá" />

      <LanguageLink 
      link = "https://www.google.com/setprefs?sig=0_kdS5GXgDOdDunIyBQtYE0uhDZwg%3D&hl=pcm&source=homepage&sa=X&ved=0ahUKEwj0wIHb25z-AhW0RKQEHYtxB9MQ2ZgBCBY"
      name = "Nigerian Pidgin" />

    </div>
  )
}

export default Footer