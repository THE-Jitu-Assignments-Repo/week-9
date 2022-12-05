import React from "react";

function UsersCard({ user }) {
  return (
    <div key={user.login.uuid} className="md:flex flex-col  shadow-sm">
      <div className="card flex justify-center items-center flex-row">
        <div className=" border md:shrink-0">
          <img
            src={user.picture.thumbnail}
            alt="users"
            className="items-center w-full"
          />
        </div>
        <div className="card-content">
          <div className="flex flex-col justify-between pl-2">
            <div className="font-bold text-xl mb-1">{user.name.first}</div>
            <div className="text-sm text-gray-600 ">{user.email}</div>
            <div className="text-sm text-gray-600 mt-1">{user.dob.age} Questions</div>
            <div className="text-sm text-gray-400 mt-1">{user.location.street.number} <span className="text-sm text-gray-400">Votes</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersCard;
