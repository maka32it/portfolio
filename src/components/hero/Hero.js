import './Hero.scss'
import React from 'react'
import me from '../../images/hacker.png'
import {AiOutlineInstagram,AiOutlineGithub,AiOutlineLinkedin,AiOutlineFacebook} from 'react-icons/ai'

export default function Hero() {
  return (
    <div className='main' id='hero'>
        <div className='container'>
      <div className='main-wrap'>
            <div className='main-left'>
                <h2>I'M</h2>
                <h1 className='name'>Voleanin Max</h1>
                <p className='text'>I am a self-taught Front End Developer.
                Willing to work,learn and grow everyday.
                Open to any work/intership opportunities.
                </p>
                <a href='/' className='btn'>
                  <span className='line line-top'></span>
                  <span className='line line-right'></span>
                  <span className='line line-bottom'></span>
                  <span className='line line-line'></span>
                Contact me</a>
                <a href='/' className='btn'>
                <span className='line line-top'></span>
                  <span className='line line-right'></span>
                  <span className='line line-bottom'></span>
                  <span className='line line-line'></span>
                Let's talk</a>
            </div>
            <div className='main-right'>
              <div className='img-wrapper'>
              <img  src={me} alt='me'></img>
              <div className='content'>
                <a href='https://www.instagram.com/voleaninmax/' target={'blank'}>
                <AiOutlineInstagram className='content-icon inst'/></a>
                <a href='https://github.com/maka32it?tab=repositories'>
                <AiOutlineGithub className='content-icon github'/></a>
                <a href='https://www.linkedin.com/in/max-voleanin-7b5699254/' target={'blank'}>
                <AiOutlineLinkedin className='content-icon linkedin'/></a>
                <a href='https://www.facebook.com/profile.php?id=100007224344919' target={'blank'}>
                <AiOutlineFacebook className='content-icon facebook'/></a>
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
