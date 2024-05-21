import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
<>
<nav>
    <div className="NavbarElements">
        <div className="NavbarLogo">

        </div>
        <div className="NavbarList">
<ul>
    <li ><NavLink to={"/Home"} style={{listStyle:'none',textDecoration:'none'}} >Home</NavLink></li>
    <li><NavLink to={"/About"} >About</NavLink></li>
    <li><NavLink to={"/Courses"} >Courses us</NavLink></li>
    <li><NavLink to={"/Basket"} >Basket</NavLink></li>
    <li><NavLink to={"/Elements"} >Element</NavLink></li>
</ul>
        </div>
        <div className="NavbarContact"></div>
    </div>
</nav>
</>
)
}

export default Navbar