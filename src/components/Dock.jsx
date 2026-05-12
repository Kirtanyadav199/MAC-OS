import React from 'react'
import './dock.scss'


const Dock = ({setWindows,windows}) => {
  return (
    <footer className='dock'>
<div className="icon github"
  onClick={() => {

    setWindows(prev => ({
      ...prev,
      github: !prev.github
    }))

  }}

>
  <img src="/doc-icons/github.svg" alt="" />
  </div>
<div className="icon note"
 onClick={() => {

    setWindows(prev => ({
      ...prev,
      note: !prev.note
    }))

  }}
>
  <img src="/doc-icons/note.svg" alt="" />
  </div>

<div className="icon pdf"
 onClick={() => {

    setWindows(prev => ({
      ...prev,
      resume: !prev.resume
    }))

  }}
>
  <img src="/doc-icons/pdf.svg" alt="" />
  </div>


<div className="icon calender"
>
  <img src="/doc-icons/calender.svg" alt="" />
  </div>


<div className="icon spotify"
 onClick={() => {

    setWindows(prev => ({
      ...prev,
      spotify: !prev.spotify
    }))

  }}
>
  <img src="/doc-icons/spotify.svg" alt="" />
  </div>

<div className="icon mail">
  <img src="/doc-icons/mail.svg" alt="" />
  </div>

<div className="icon link">
  <img src="/doc-icons/link.svg" alt="" />
  </div>

<div className="icon cli"
 onClick={() => {

    setWindows(prev => ({
      ...prev,
      cli: !prev.cli
    }))

  }}
>
  <img src="/doc-icons/cli.svg" alt="" />
  </div>

    </footer>
  )
}

export default Dock
