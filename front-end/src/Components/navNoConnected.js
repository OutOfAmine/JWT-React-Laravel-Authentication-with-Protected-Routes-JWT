import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NavNoConnected() {
  return (
    <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to={"/"} className="flex-shrink-0">
            <img
              className="h-8 w-8 cursor-pointer"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                <Link to={"/protected-route"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    Protected route 
                </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <div className="relative ml-3">
              <div>
                <Link to={"/login"} className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Outlet></Outlet>
  </nav>
  )
}

export default NavNoConnected