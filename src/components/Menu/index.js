import React from 'react';
import { Link } from 'react-router-dom';

import ButtonWithLink from '../ButtonWithLink';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Bikeflix Logo"/> 
            </a>
            <ButtonWithLink as={Link} className="ButtonLink" to="/create/video">Novo Vídeo</ButtonWithLink>
        </nav>
    )
}

export default Menu;