import React, { useState } from 'react'
import './portfolio.scss'
import apple from '../../images/apple.png'
import vert from '../../images//vertical.png'
import portfolio from '../../images//portfolio.png'
import movies from '../../images//movies.png'
import travel from '../../images//travel.png'
import weather from '../../images//weather.png'
import {AiOutlineGithub} from 'react-icons/ai'
export default function Portfolio() {
    const [rotate,setRotate] = useState(true)
  return (
    <div className='portfolio' id='portfolio'>
      <div className='container'>
         <div className='portfolio-container'>
            <div className='title'>My Portfolio</div>
        <div className='section'>
            <div className={rotate ? 'card-container ':'card-container original'}>
            <div className='card' onClick={()=>setRotate(!rotate)}>
                <img src={apple} alt='apple' className="card-image"></img>
                <h2 className="category"> Apple site clone </h2>
                <div className="heading"> Took a random Figma template to practice my skills.
                    <div className="author"> By <span className="name">Maxim Voleanin</span><button>Github<AiOutlineGithub className='git'/></button></div>
                </div>
            </div>
            <div className="card">
                <img src={vert} alt='verticalProgram' className="card-image"></img>
                <div className="category">  Jump Program Site </div>
                <div className="heading">Practiced Tailwind skills with React Router. 
                <div className="author"> By <span className="name">Maxim Voleanin</span><button>Github<AiOutlineGithub className='git'/></button></div>
                </div>
            </div>
            <div className="card">
            <img src={portfolio} alt='portfolio' className="card-image"></img>
                <div className="category"> portfolio web-site </div>
                <div className="heading"> Practiced SCSS and other CSS tools
                <div className="author"> By <span className="name">Maxim Voleanin</span><button>Github<AiOutlineGithub className='git'/></button></div>
                </div>
            </div>
            <div className="card">
            <img src={movies} alt='movies' className="card-image"></img>
                <div className="category"> Movie app </div>
                <div className="heading"> Getting data from the Api and Dark/Light Mode.
                <div className="author"> By <span className="name">Maxim Voleanin</span><button>Github<AiOutlineGithub className='git'/></button></div>
                </div>
            </div>
            <div className="card">
            <img src={travel} alt='travel' className="card-image"></img>
                <div className="category"> Travel  </div>
                <div className="heading"> One of the first React Projects w/ React Router
                <div className="author"> By <span className="name">Maxim Voleanin</span><button>Github<AiOutlineGithub className='git'/></button></div>
                </div>
            </div>
            <div className="card">
            <img src={weather} alt='weather' className="card-image"></img>
                <div className="category"> Weather app </div>
                <div className="heading"> Getting data from the Api 
                <div className="author"> By <span className="name">Maxim Voleanin</span><button>Github<AiOutlineGithub className='git'/></button></div>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
      </div>
  )
}
