import React from 'react'
import img from '../img/logo.png';

const Navbar = () => {
    return (
        <nav className='navbar' >
            <div className='navbar__text'>
                <div className='logo'><img src={img} alt='logo'/>logo</div>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>News</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
