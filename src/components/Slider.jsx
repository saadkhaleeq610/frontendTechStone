import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../store/pageSlice";

function Slider() {
  const currentPage = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const totalPages = 5; 

  return (
    <div className="flex justify-center mt-6 pb-10">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`h-3 w-3 mx-1 rounded-full ${
            currentPage === index ? "bg-[#6f8efd]" : "bg-gray-300"
          }`}
          onClick={() => dispatch(setPage(index))}
        ></div>
      ))}
    </div>
  );
}

export default Slider;
