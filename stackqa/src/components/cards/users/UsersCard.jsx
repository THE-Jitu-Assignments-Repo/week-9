import React from "react";
import { createAvatar } from "../../../Helpers/userImage/userImage";

function UsersCard({ user }) {

  const avatar = createAvatar(user.username)
  return (
    <div key={user.user_id} className="md:flex flex-col  shadow-sm">
      <div className="card flex justify-center items-center flex-row">
        <div className="md:shrink-0">
          {user?.imageUrl ? (
            <img src={user?.imageUrl} alt="profile" className=" bg-blue-500 rounded-full w-10 h-10  flex justify-center text-white capitalize text-xl items-center " />
          ) : (
            <div className="bg-blue-500 rounded-full w-10 h-10 items-center flex justify-center text-white capitalize text-xl" >
              {avatar}
            </div>
          )}
        </div>
        <div className="card-content">
          <div className="flex flex-col justify-between pl-2">
            <div className="font-bold text-xl mb-1">{user?.username}</div>
            <div className="text-[10px] text-gray-600  ">{user?.email}</div>
            <div className="text-[12px] text-gray-600 mt-1">{user?.totalQst} Question {user?.totalQst > 1 ? "s": ''}</div>
            <div className="text-sm text-gray-400 mt-1">{user?.totalVotes} <span className="text-sm text-gray-400">Vote{user?.totalVotes > 1 ? "s": ''} </span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersCard;
