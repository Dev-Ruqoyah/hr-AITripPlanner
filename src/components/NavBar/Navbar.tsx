import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo1.jpg'
import logo2 from '../../assets/logo2.webp'

const Navbar:React.FC = () => {
  return (
    <>
    <nav className='py-2 fixed w-full '>
      <div className="container mx-auto max-w-6xl bg-secondary p-1 rounded-md px-3 shadow-md ">
      <div className="flex justify-between items-center">
        <div className="nav-logo">
          <Link to={"/"}>
          <img src={`${logo2}`} className='w-14 rounded-4xl' alt="" /></Link>
        </div>
        <div className="nav-links flex gap-3">
          <Link to={"/login"}>
          <button className='border-0 bg-primary text-neutral hover:text-neutral1 px-4 py-2 rounded-md hover:bg-primary1 transition-all duration-300'>Login</button>
          </Link>

          <Link to={"/login"}>
          <button className='border border-primary l text-neutral1 hover:text-neutral1 px-4 py-2 rounded-md hover:bg-primary1 transition-all duration-300'>Register </button>
          </Link>
        </div>
      </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar