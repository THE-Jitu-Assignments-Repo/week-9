import React, { useEffect, useMemo } from "react";
import UsersCard from "../../components/cards/UsersCard";
import axios from "axios";
import { AiOutlineUser } from "react-icons/ai";

function Users() {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=50");
      const data = res.data;
      setUsers(data);
      // console.log(data)
    };

    fetchUsers();
  }, []);

//   console.log(users.results?.map((data) => data.name.last));
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between items-center border pt-5">
          <h2 className="text-2xl pl-5 flex flex-row items-center gap-2"> <AiOutlineUser />Users</h2>
        </div>
        <div className="grid grid-cols-4 gap-4 w-full p-10">
          {users.results?.map((user) => (
            <UsersCard key={user.login.uuid} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
