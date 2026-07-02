import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/guillaume-s%C3%A9r%C3%A9" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <BsLinkedin className='link' />
                </a>
                <p className='footer-name'>&copy; Guillaume SERE</p>
                <a href="https://github.com/GuillaumeSere" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <BsGithub className='link' />
                </a>
            </div>
        </footer>
    )
}

export default Footer
