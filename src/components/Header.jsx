import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../store/pageSlice";
import SearchIcon from "../assets/SearchIcon";

function Header() {
  const currentPage = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const tabs = ["Reputation", "New users", "Voters", "Editors", "Moderators"];

  const handleTabClick = (index) => {
    dispatch(setPage(index));
  };

  return (
    <>
      <div className="sm:mx-8 mt-[100px]">
        <div>
          <h1 className="pt-10 text-2xl md:text-[32px] mt-[100px] font-black font-MerriWeather text-gray-900 text-left">
            Users
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-6">
          <div className="flex items-center border-[0.5px] border-[#cbcdd4] rounded-sm p-2 w-full md:w-[327px]">
            <SearchIcon className="h-5 w-5" />
            <input
              type="text"
              placeholder="Search users"
              className="ml-2 placeholder-gray-900 font-Poppins flex-grow outline-none"
            />
          </div>
          <div className="flex justify-end font-Poppins mt-4 md:mt-0 pr-4">
            <div>
              <ul className="flex flex-wrap space-x-2 md:space-x-4 py-3 text-[16px]">
                {tabs.map((tab, index) => (
                  <li key={tab}>
                    <a
                      href="#"
                      className={`px-2 md:px-4 py-[10px] md:py-[14px] rounded-md font-medium ${
                        currentPage === index ? "bg-[#849FFF] text-white" : "text-gray-500 hover:text-gray-700"
                      }`}
                      onClick={() => handleTabClick(index)}
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

export default Header;
