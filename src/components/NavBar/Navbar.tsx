import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../../assets/logo2.webp'
import Button from '../Button'

const Navbar: React.FC = () => {
  return (
    <nav className='py-2 fixed w-full bg-opacity-90 z-50 '>
      <div className="container mx-auto max-w-6xl bg-secondary p-1 rounded-md px-3 shadow-md">
        <div className="flex justify-between items-center">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo2} className='w-14 rounded-xl' alt="Site Logo" />
            </Link>
          </div>
          <div className="nav-links flex gap-3">
            <Link to="/login">
              <Button text="Login" />
            </Link>
            <Link to="/register">
              <Button text="Register" variant="outlined" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
