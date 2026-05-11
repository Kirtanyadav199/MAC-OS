import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './windows/Github'
import Note from './windows/Note'
import Resume from './windows/Resume'
import Spotify from './windows/Spotify'
import Cli from './windows/Cli'



const App = () => {
  return (
    <main>
     <Nav/>
     <Dock/>
     <Github/>
     <Note/>
     <Resume/>
     <Spotify/>
     <Cli/>
    </main>
  )
}

export default App
