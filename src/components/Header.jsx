import React from 'react'
import Picasso from '../images/Picasso.gif'

const Header = () => {
    return (
        <div className='header'>
            <h1>GALERIE</h1>
            <img src={Picasso} alt="gif" />
            <h1>IA</h1>
        </div>
    )
}

export default Header
