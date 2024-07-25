import React from 'react'
import SearchIcon from '../assets/SearchIcon'

function Title(props) {
  return (
    <header className='max-w-7xl mx-[100px] mt-[50px]'>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 text-left">Users</h1>
        </div>

      <div className='flex flex-col'>
        <div className='flex mt-[24px]'>
        <div className="text-[16px]">
        <div className="flex w-[327px] h-[64px] items-center gap-1 border-1 border-black">
          <SearchIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search users"
            className="block w-full py-2 placeholder-gray-500 focus:outline-none "
          />
      </div>
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
