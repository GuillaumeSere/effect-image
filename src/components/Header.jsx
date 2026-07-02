import React from 'react'
import Picasso from '../images/Picasso.gif'

const Header = () => {
    return (
        <header className='header'>
            <div className="header-brand">
                <img src={Picasso} alt="" />
                <div>
                    <p className="header-kicker">Art abstrait</p>
                    <h1>Galerie IA</h1>
                </div>
            </div>
            <p className="header-count">56 oeuvres</p>
        </header>
    )
}

export default Header
