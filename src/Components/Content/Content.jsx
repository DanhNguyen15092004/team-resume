import React from 'react'
import './Content.css'
import LeftContent from '../LeftContent/LeftContent'
import RightContent from '../RightContent/RightContent'

const Content = () => {
  return (
    <div className="app">
        <div className='content background' >
          <div className="left-content background">
            <LeftContent />
            <RightContent/>
          </div>
        </div>
    </div>
  )
}

export default Content
