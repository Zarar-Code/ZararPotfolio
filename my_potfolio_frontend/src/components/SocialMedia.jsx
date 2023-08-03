import React from 'react'
import {   BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href="https://www.linkedin.com/in/zarar-haider-281894210/" target="_blank" rel="noreferrer" ><BsLinkedin/></a>
        </div>
        <div>
        <a href="https://github.com/Zarar-Code" target="_blank" rel="noreferrer" ><AiFillGithub/></a>
        </div>
        {/* <div>
        <a href="https://www.instagram.com/em_zarar/" target="_blank" rel="noreferrer" ><BsTwitter/></a>
        </div> */}

    </div>
  )
}

export default SocialMedia