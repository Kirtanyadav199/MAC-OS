import React, { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './windows/Github'
import Note from './windows/Note'
import Resume from './windows/Resume'
import Spotify from './windows/Spotify'
import Cli from './windows/Cli'




const App = () => {

   const[windows,setWindows] = useState({
  github: false,
  resume: false,
  spotify: false,
  cli: false,
  note: false

  })

  return (
    <main>
     <Nav/>
     <Dock setWindows={setWindows} windows={windows}/>
   {windows.github && <Github closeWindow={()=>{
    setWindows(prev=>({
      ...prev,
      github:false
    }))
   }}/>}
  {windows.resume && <Resume />}
  {windows.spotify && <Spotify />}
  {windows.cli && <Cli />}
  {windows.note && <Note/>}
    </main>
  )
}

export default App
