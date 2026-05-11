import React, { useState } from 'react'
import Spotify from './Spotify'
import MacWindow from './MacWindow'
import "./Cli.scss"


const Cli = () => {

  const[input,setInput] = useState('')
  const[history,setHistory] = useState([])

  const commands = {

  help: `
Available Commands:

whoami
skills
projects
github
resume
spotify
clear
  `,

  whoami: `
Kirtan Yadav
Frontend Developer
React Enthusiast
  `,

  skills: `
React
Tailwind CSS
Node.js
Firebase
  `,

  projects: `
1. MacOS Clone
2. PashuSetu
3. Portfolio Website
  `,

  github: `
Opening GitHub...
  `
}

const handleCommand = ()=>{
  const command = input.trim();

  if(command == "") return;

  //clear
  if(command == "clear"){
    setHistory([])
    setInput("")
    return
  }

  //Github
  if(command == "github"){
    window.open( "https://github.com/Kirtanyadav199")
  }

  // resume
  if(command == "resume"){
    window.open( './resume.txt')
  }

  // spotify
  if(command == "resume"){
    <Spotify/>
  }

  const output = commands[command] || "command not found"

  setHistory((prev)=>[
    ...prev,
    {
      command,
      output
    }
  ])
  setInput("")
}
  return (
    <MacWindow>
      <div className="cli-window">
      <div className="history">
        {history.map((elem,idx)=>{
        return <div key={idx}>
            <p>kirtan@mac:~$ {elem.command}</p>
            <p>{elem.output}</p>
         </div>
        })}
      </div>

      <div className="input-line">
        <span>kirtan@mac:~$</span>
        <input 
        type="text"
        value={input}
        onChange={(e)=>{
          setInput(e.target.value)
        }}
        onKeyDown={(e)=>{
          if(e.key == "Enter"){
            handleCommand()
          }
        }}
        />
      </div></div>
    </MacWindow>
  )
}

export default Cli
