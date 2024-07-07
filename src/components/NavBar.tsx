import React from 'react'
import { IoMdPaw } from "react-icons/io";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className="w-full shadow-lg px-6 py-4  bg-[#626087]">
            <ul className="list-none w-full text-white text-2xl">
                <li><Link to={'/home'}><h1 className="font-light hover:text-curious-blue-300"><IoMdPaw className="inline" /> PawFect Match</h1></Link></li>
            </ul>
        </nav>
    )
}


export default NavBar