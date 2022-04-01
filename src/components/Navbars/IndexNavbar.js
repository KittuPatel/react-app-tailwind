/*eslint-disable*/
import React from "react"
import { Link } from "react-router-dom"
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js"

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <>
      <nav className='top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              to='/'
              className='text-2xl font-normal text-lightBlue-800 leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
            >
              Siremar
            </Link>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>

              <li className='flex items-center'>
                <Link
                  to='/'
                  className='text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
                >
                  Home
                </Link>
              </li>
              <li className='flex items-center'>
                <Link
                  to='/about-us'
                  className='text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
                >
                  About Us
                </Link>
              </li>
              <li className='flex items-center'>
                <Link
                  to='/contact-us'
                  className='text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
                >
                  Contact Us
                </Link>
              </li>
              <li className='flex items-center'>
                <Link
                  to='/auth/register'
                  className='text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
                >
                  Sign Up
                </Link>
              </li>

              <li className='flex items-center'>
                <Link
                  to='/auth/login'
                  className='text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
