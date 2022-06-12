import React from "react";

const UserButton = (props) => {
  return (
    <div>
      <div className="h-5 w-32 md:h-10 md:wd-30 bg-gray-300 hover:bg-gray-400 m-4 p-2 align-middle text-center justify-center rounded-lg">
        {props.val}
      </div>
    </div>
  );
};

const Users = (props) => {
  return (
    <div className="w-full flex flex-row place-content-center flex-wrap">
      {props.userlist.map((user, key) => (
        <UserButton val={key} />
      ))}
    </div>
  );
};

export default Users;
