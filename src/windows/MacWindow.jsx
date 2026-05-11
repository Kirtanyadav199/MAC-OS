import React from 'react'
import { Rnd } from 'react-rnd'
import './MacWindow.scss'

const MacWindow = ({ children,width=500,height=400,minWidth=400,
  minHeight=300,closeWindow}) => {
  return (
    <Rnd default={{
    x: 250,
    y: 50,
    width: width,
    height: height,
  }}
   minWidth= {minWidth}
  minHeight={minHeight}
  dragHandleClassName="nav"
  cancel=".main-content"
  >
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red"
                    onClick={closeWindow}
                    ></div>
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
