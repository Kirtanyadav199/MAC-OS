import React from 'react'
import MacWindow from './MacWindow'
import githubData from '../assets/github.json'
import './Github.scss'


const GitCard = ({ repo }) => {
    return (
        <div className="card">
            <img src={repo.image} alt="" />
           <h1>{repo.title}</h1>
           <p className='description'>{repo.description}</p>

           <div className="tags">
            {repo.tags.map(tag=><p className='tag'>{tag}</p>  )}
           </div>

           <div className="urls">
            <a href={repo.repoLink}>Repository</a>
           {repo.demoLink && <a href={repo.demoLink}>Demo</a>}
           </div>
        </div>
    )
}


const Github = () => {
  return (
   <MacWindow>
        <div className="cards">
           {githubData.map(project =>{
            return <GitCard repo={project} />
           })}
        </div>
   </MacWindow>
  )
}

export default Github
