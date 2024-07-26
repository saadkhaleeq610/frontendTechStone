import React from "react";

function Card({ user }) {
  return (
    <div className="bg-[#FBFCFF] rounded-2xl p-4 flex gap-4 w-[327px] h-[208px] transition-transform duration-10 hover:scale-80 hover:shadow-lg hover:border-[#BFC8E5] border border-transparent">
      <div className="w-24 h-24 rounded-full mt-3 overflow-hidden">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}'s avatar`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col mt-5">
        <h3 className="font-black font-MerriWeather text-lg">{`${user.first_name} ${user.last_name}`}</h3>
        <p className="text-gray-600 font-Poppins text-sm mb-2">{user.email}</p>
        <div className="flex flex-wrap font-Poppins gap-2">
          <span className="text-[#516FD4] text-xs px-2 py-1 border border-1 border-[#BFC8E6] rounded-full">
            clothes
          </span>
          <span className="text-[#516FD4] text-xs px-2 py-1 border border-1 border-[#BFC8E6] rounded-full">
            stem
          </span>
          <span className="text-[#516FD4] text-xs px-2 py-1 border border-1 border-[#BFC8E6] rounded-full">
            headset
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
