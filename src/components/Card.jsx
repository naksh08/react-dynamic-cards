import React from "react";

function Card({ user, index, handleRemove }) {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-[90%] relative">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={user.cover}
          alt="cover"
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">Blog</p>
          <a href="#" className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{user.title}</p>
            <p className="mt-3 text-base text-gray-500">{user.desc}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href="#">
              <span className="sr-only">Roel Aufderehar</span>
              <img
                className="h-10 w-10 rounded-full"
                src={user.profile}
                alt="profile"
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href="#" className="hover:underline">
                {user.auth}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">Mar 16, 2020</time>
              <span aria-hidden="true">&middot;</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-lg"
        onClick={()=>handleRemove(index)}>
        Remove
      </button>
    </div>
  );
}

export default Card;
