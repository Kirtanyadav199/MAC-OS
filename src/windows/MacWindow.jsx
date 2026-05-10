import React from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'

const MacWindow = ({ children }) => {
  return (
    <Rnd default={{
    x: 250,
    y: 50,
    width: 500,
    height: 400,
  }}
   minWidth={400}
  minHeight={300}>
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="title">kirtanyadav - zsh</div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default MacWindow
