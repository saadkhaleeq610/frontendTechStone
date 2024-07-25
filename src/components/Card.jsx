import React from 'react';

function Card({ user }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex gap-4 items-center w-[327px] h-[208px] transition-transform duration-10 hover:scale-80 hover:shadow-lg hover:border-[#BFC8E5] border border-transparent">
        <div className='ml-6'>
        <img 
          src={user.avatar} 
          alt={`${user.first_name} ${user.last_name}'s avatar`} 
          className="w-97 h-97 rounded-full mb-2"
        />
        </div>
        <div className='flex flex-col gap'>
        <h3 className="font-bold text-lg">{`${user.first_name} ${user.last_name}`}</h3>
        <p className="text-gray-600 text-sm mb-2">{user.email}</p>
        <div className="flex flex-wrap gap-2">
        <span className="bg-none text-blue-800 text-xs px-2 py-1 border border-1 border-blue-900 rounded-full">clothes</span>
        <span className="bg-none text-blue-800 text-xs px-2 py-1 border border-1 border-blue-900 rounded-full">stem</span>
        <span className="bg-none text-blue-800 text-xs px-2 py-1 border border-1 border-blue-900 rounded-full">headset</span>
        </div>
        </div>
      </div>
  );
}

export default Card;
