import React from 'react'
import './Content.css'
import LeftContent from '../LeftContent/LeftContent'

const Content = () => {
  return (
    <div className="app">
        <div className='content'>
          <div className="left-content">
            <LeftContent />
          </div>
        </div>
    </div>
  )
}

export default Content
