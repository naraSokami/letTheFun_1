import React from 'react';

function Navbar(props) {

    const cartNotEmpty = false;

    return (
        <nav>
            <a className="logo">Logo</a>
            <ul>
                <li><a href="">Shop&nbsp;&nbsp;&nbsp;<i class="fas fa-store"></i></a></li>
                <li><a href="">Contact&nbsp;&nbsp;&nbsp;<i class="fas fa-file-signature"></i></a></li>
                <li><a href="">User&nbsp;&nbsp;&nbsp;<i class="fas fa-user"></i></a></li>
                <li><a href="">Buy&nbsp;&nbsp;&nbsp;<i class="fas fa-shopping-cart"></i></a></li>
                <li className="cart">{props.cart} $</li>
                <li className="counter">{props.counter}</li>
            </ul>
        </nav>
    )
}

export default Navbar;