import React, { useState } from 'react'
import './header.scss'
import {Link} from 'react-scroll'

export default function Header() {
  const [active,setActive] = useState(true)
  function handleWidth(){
    if(window.innerWidth>= 700){
      setActive(true)
    } else{
      setActive(false)
    }
  }
  // setting navbar color
  const [color,setColor] = useState(false)
  function changeColor(){
    if(window.innerWidth>= 700){
      setActive(true)
    } else{
      setActive(false)
    }
  }
  window.addEventListener('resize',changeColor)

  return (
    <header className= 'header'>
    <div className='navbar'>
    <div className='container'>
      
        <div className='navbar-wrap'>
          <Link to='hero' className={'navbar-logo'}>VM</Link>
          <div className='navbar-menu'>
            <div className={active ? 'navbar-navigation active':'navbar-navigation'}>
              <Link onClick={handleWidth} to="hero" spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
              <Link onClick={handleWidth}  to="skills" spy={true} smooth={true} offset={100} duration={500} >Skills</Link>
              <Link onClick={handleWidth}  to="portfolio" spy={true} smooth={true} offset={-100} duration={500} >Portfolio</Link>
              <Link  onClick={handleWidth}  to="contact" spy={true} smooth={true} offset={-100} duration={500} >Contact</Link>
            </div>
          <button 
           onClick={()=>setActive(!active)} className={active ? 'navbar-button active':'navbar-button '}>
            <span ></span>
          </button>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}
