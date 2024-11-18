import React from 'react'

function Image({image}) {
    const {urls, links, user,  alt_description} =image
  return (
    <div>
      <img src={urls.regular} alt={alt_description} className='rounded-md w-full'/>
    </div>
  )
}

export default Image
