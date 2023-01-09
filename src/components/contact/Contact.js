import React from 'react'
import './contact.scss';
import {AiFillPhone,AiTwotoneMail} from 'react-icons/ai'

export default function Contact() {
  return (
<div className='contact' id='contact'>
    <div className='wrap'>
        <h2 className='title'>Contact Me:</h2>
        <div className='contact-container'>
        <div className='number'>
        <AiFillPhone className='logo'/>
        <p className='phone'>+373 76743375</p>
        </div>
        
        <div className='mail'>
        <AiTwotoneMail className='logo'/>
        <p className='text'>voleaninmax@gmail.com</p>
        </div>
        </div>
       
        <div className="input-group">
    <input type="email" className="input" id="Email" name="Email" placeholder="voleaninmax@gmail.com"/>
    <input className="button--submit" value="Send a message" type="submit"/>
        </div>
    </div>
    </div>
  )
}
