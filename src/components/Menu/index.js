import React from 'react';

import ButtonWithLink from '../ButtonWithLink';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Bikeflix Logo"/> 
            </a>
            <ButtonWithLink className="ButtonLink" href="/">Novo Vídeo</ButtonWithLink>
        </nav>
    )
}

export default Menu;