import React from 'react'
import SearchIcon from '../assets/SearchIcon'

function Title(props) {
  return (
    <header className='max-w-7xl mx-[100px] mt-[100px]'>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 text-left">Users</h1>
        </div>

      <div className='flex flex-col'>
        <div className='flex mt-[24px] text-[16px]'>
        <div className="flex items-center border border-[#BFC8E6] rounded-lg p-2 w-full max-w-md">
          <SearchIcon className="h-5 w-5" />
          <input
            type="text"
            placeholder="Search users"
            className="ml-2 placeholder-gray-900 flex-grow outline-none"
          />
    </div>
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="flex space-x-4 py-3 text-sm">
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Reputation</a>
              </li>
              <li>
                <a href="#" className="bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm font-medium">New users</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Voters</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Editors</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Moderators</a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Title
