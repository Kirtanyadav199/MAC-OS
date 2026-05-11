import React from 'react'
import MacWindow from './MacWindow'
import "./Spotify.scss"

const Spotify = () => {
  return (
    <MacWindow width={300}height={350} minHeight={355} minWidth={250} >
        <div className="spotify-window">
              <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXtlo6ENS92N?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      
    </MacWindow>
  )
}

export default Spotify
