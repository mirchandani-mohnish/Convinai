import React from "react";
import { useSelector, connect } from "react-redux";
import { useState, useEffect } from "react";

const UserButton = (props) => {
  return (
    <div>
      <div className="h-5 w-32 md:h-10 md:wd-30 bg-gray-300 hover:bg-gray-400 m-4 p-2 align-middle text-center justify-center rounded-lg z-50">
        {props.val}
      </div>
    </div>
  );
};

const Users = () => {
  const userList = useSelector((state) => state.userList);
  console.log(userList);
  return (
    <div className="w-full flex flex-row place-content-center flex-wrap z-50">
      {userList.value.payload.map((user, key) => (
        <UserButton val={key} key={key} />
      ))}
    </div>
  );
};

export default Users;
