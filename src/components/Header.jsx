import React, { useState } from "react";
import SearchIcon from "../assets/SearchIcon";

function Title(props) {
  const [activeTab, setActiveTab] = useState("New users");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
                {["Reputation", "New users", "Voters", "Editors", "Moderators"].map((tab) => (
                  <li key={tab}>
                    <a
                      href="#"
                      className={`px-4 py-[14px] rounded-md font-medium ${
                        activeTab === tab ? "bg-[#849FFF] text-white" : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => handleTabClick(tab)}
                    >
                      {tab}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Title;
