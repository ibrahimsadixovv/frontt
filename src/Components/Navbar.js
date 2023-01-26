import React from 'react'
import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>

<nav>
    <div className='navbar'>

<div className='logo'>
<img src="https://preview.colorlib.com/theme/aroma/img/logo.png"/>
</div>

<div className='links'>
<ul>
    <li>Home</li>
   <Link className='link' to={`/Add`}> <li>Add</li> </Link>
    <li>Blog</li>
    <li>Pages</li>
    <li>Contact</li>
</ul>
</div>

<div className='icons'>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-solid fa-cart-arrow-down"></i>
</div>

<div className='button'>
    <button>Buy Now</button>
</div>



    </div>
</nav>

    </div>
  )
}

export default Navbar