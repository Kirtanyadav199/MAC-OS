import { useState } from 'react'
import React from 'react'
import MacWindow from './MacWindow'
import "./Cli.scss"

const Cli = () => {

  const [input, setInput] = useState("")
  const [history, setHistory] = useState([])

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

   const handleCommand = () => {

    const command = input.trim()

    if(command === "") return

    // CLEAR
    if(command === "clear") {
      setHistory([])
      setInput("")
      return
    }
   // open spotify
    if(command === "spotify") {

  window.open(
    "https://open.spotify.com/"
  )

}    
  // open resume
    if(command === "resume") {

  window.open("./resume.pdf")

}
    // OPEN GITHUB
    if(command === "github") {

      window.open(
        "https://github.com/Kirtanyadav199"
      )

    }

    const output =
      commands[command] ||
      "Command not found"

    setHistory((prev) => [
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

        {/* HISTORY */}
        <div className="history">

          {history.map((item, index) => (

            <div key={index}>

              <p>
                kirtan@mac:~$ {item.command}
              </p>

              <p>{item.output}</p>

            </div>

          ))}

        </div>

        {/* INPUT */}
        <div className="input-line">

          <span>kirtan@mac:~$</span>

          <input
            type="text"

            value={input}

            onChange={(e) =>
              setInput(e.target.value)
            }

            onKeyDown={(e) => {

              if(e.key === "Enter") {
                handleCommand()
              }

            }}
          />

        </div>

      </div>

    </MacWindow>
  )
}

export default Cli