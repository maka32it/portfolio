import React, { useRef } from 'react'
import './Skills.scss'
import Typed from 'react-typed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SiTypescript,SiTailwindcss} from 'react-icons/si'
import { faCss3, faHtml5, faJsSquare, faReact, faTypo3 } from '@fortawesome/free-brands-svg-icons'
export default function Skill() {

  return (
    <div className='skills' id='skills' >
      <div className='container'>
        <div className='skills-wrap'>
          <div className='skills-left'>
            <Typed className='title' 
            strings={['Long story short']}
            typeSpeed={120}
            backSpeed={40}
            loop></Typed>
              <p >My story began with 
              <a href='https://teamtreehouse.com/tracks/front-end-web-development' target={'blank'}> TeamTreeHouse </a>
              courses, where I gained the needed base knowledge of HTML CSS and JavaScript.
              </p>
              <p >The next step was experimenting with HTML and CSS on my own to get 
              a better idea of what it is and implementing a little bit of JavaScript to the pages. </p>
              <p >Thanks to 
              <a href='https://www.freecodecamp.org/' target={'blank'}> FreeCodeCamp </a>
              React Course I finally started understanding it, all the other courses did not work out.
               </p>
               <p >With the help of YouTube videos I gained a bit of knowledge of
                CSS frameworks like Tailwind, React Styled Components and finally a SCSS. </p>
                <p >Now I am actively learning TypeScript and Redux Toolkit.</p>
          </div>
          <div className='icons'>
            <SiTailwindcss className='icon' color='#42a5f5'/>
            <FontAwesomeIcon className='icon' icon={faHtml5} color='#F06529'/>
            <FontAwesomeIcon className='icon' icon={faCss3} color='#28A4D9'/>
            <FontAwesomeIcon className='icon' icon={faReact} color='#5ED4F4'/>
            <FontAwesomeIcon className='icon' icon={faJsSquare} color='#EFD81D'/>
            <SiTypescript className='icon' color='#3178C6'/>
            </div>
          <div className='skills-right'>
            <div className='cube-spinner'>
              <div className='face1'>
              <SiTailwindcss color='#42a5f5'/>
              </div>
              <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
              </div>
              <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
              </div>
              <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
              </div>
              <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
              </div>
              <div className='face6'>
                <SiTypescript color='#3178C6'/>
              </div>
              
            </div>
          </div>
          </div>
      </div>
      
    </div>
  )
}
