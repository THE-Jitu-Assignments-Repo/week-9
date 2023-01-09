import React, { useEffect } from "react";
import UsersCard from "../../components/cards/users/UsersCard";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getStackQAusers } from "../../features/stackqaUsers/stackQAuserSlice";
// import { useState } from "react";

function Users() {
  // const [us, setUs]=useState('')
  const { StackQAusers } = useSelector(state=>state.stackQAusers)

  // const dispatch = useDispatch()

  useEffect(()=>{

    console.log("mmm");
    // setUs(StackQAusers)
    // dispatch(getStackQAusers())
    // dispatch(getStackQAusers())
  }, [])



  return (
    <div>
      <div >
        <div className="flex flex-row justify-between items-center border pt-5">
          <h2 className="text-2xl pl-5 flex flex-row items-center gap-2"> <AiOutlineUser />Users</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 w-full p-10 sm:grid-cols-4 sm:place-content-center lg:grid-cols-4 md:grid-cols-2">
          {StackQAusers?.map((user) => (
            <UsersCard key={user.user_id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
