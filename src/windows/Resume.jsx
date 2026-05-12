import React from 'react'
import MacWindow from './MacWindow'
import './Resume.scss'

const Resume = ({closeWindow}) => {
  return (
    <MacWindow closeWindow={closeWindow}>
        <div className="resume-window">
             <iframe src='./resume.pdf' frameborder="0"></iframe>
        </div>
       
    </MacWindow>
  )
}

export default Resume
