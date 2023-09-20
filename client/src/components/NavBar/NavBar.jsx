import React from 'react'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

// Import router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// RouterProvider
const router = createBrowserRouter([
  {
    path: '/about',
    element: <span><About/></span>
  },
  {
    path: '/contact',
    element: <span><Contact/></span>
  },
  {
    path: '/contact',
    element: <span><Login/></span>
  },
  {
    path: '/contact',
    element: <span><Register/></span>
  }
])

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
      <div className='logoDiv'>
        <h1 className='logo text-[25px] text-blueColor'>
          Go<strong>GAS</strong>Go
        </h1>
      </div>
      <div className='menu flex gap-8'>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'><span><About/></span></li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'><span><Contact/></span></li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'><span><Login/></span></li>
        <li className='menuList text-[#6f6f6f] hover:text-blueColor'><span><Register/></span></li>
      </div>
    </div>
  )
}

export default NavBar
