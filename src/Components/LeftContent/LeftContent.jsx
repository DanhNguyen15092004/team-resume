import React from 'react'
import './LeftContent.css'
import Image from '../Image/Image'
import Info from  '../Info/Info'
import Skills from '../Skills/Skills'

const LeftContent = () => {
  return (
    <div className='l-content '>
      <Image />
      <Info/>
      <Skills/>
    </div>
  )
}

export default LeftContent
