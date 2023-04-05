import React from 'react'

function LanguageLink(props) {
  return (
    <div>
      <a href={props.link}>{props.name}</a>
    </div>
  )
}

export default LanguageLink
