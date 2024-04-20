import React from 'react'
import './Image.css'
import image from '../../../Assets/img.jpg'

const Image = () => {
  return (
    <div className='image'>
      <img src={image} alt="" />
    </div>
  )
}

export default Image    