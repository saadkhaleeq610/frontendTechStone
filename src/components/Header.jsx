import React from "react";
import SearchIcon from "../assets/SearchIcon";

function Title(props) {
  return (
    <>
      <div className=" max-w-7xl mx-[100px] mt-[100px]">
        <div>
          <h1 className="text-[32px] font-black font-MerriWeather text-gray-900 text-left">
            Users
          </h1>
        </div>
        <div className=" flex justify-between mt-6">
          <div className="flex items-center border-[0.5px] border-[#cbcdd4] rounded-sm p-2 w-[327px]">
            <SearchIcon className="h-5 w-5" />
            <input
              type="text"
              placeholder="Search users"
              className="ml-2 placeholder-gray-900 font-Poppins flex-grow outline-none"
            />
          </div>
          <div className="flex justify-end font-Poppins pr-4">
            <div>
              <ul className="flex space-x-4 py-3 text-[16px] ">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 px-4 py-[14px]  rounded-md font-medium"
                  >
                    Reputation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-[#849FFF] text-white px-4 py-[14px] rounded-md font-medium"
                  >
                    New users
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 px-4 py-[14px]  rounded-md font-medium"
                  >
                    Voters
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 px-4 py-[14px]  rounded-md font-medium"
                  >
                    Editors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-700 px-4 py-[14px] rounded-md font-medium"
                  >
                    Moderators
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Title;
