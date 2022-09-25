import React from "react";
import { useQuery } from "react-query";
import { Fade } from "react-reveal";
import Loading from "../Pages/Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://daisycomputer-server.onrender.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <Fade left cascade>
      <div>
        <h2 className="text-2xl">All Users: {users.length}</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fade>
  );
};

export default Users;
