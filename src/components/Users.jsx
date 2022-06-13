import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateUser } from "../redux/reducers/currentUser";

const UserButton = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.setCurrentUser(props.val);
        }}
        className="h-5 w-32 md:h-10 md:wd-30 bg-gray-300 hover:bg-gray-400 m-4 p-2 align-middle text-center justify-center rounded-lg z-50"
      >
        {props.val}
      </button>
    </div>
  );
};

const Users = () => {
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-row place-content-center flex-wrap z-50">
      {userList.value.payload.map((user, key) => (
        <UserButton
          val={key}
          key={key}
          setCurrentUser={(id) => {
            dispatch(updateUser({ id: parseInt(id) }));
            console.log(id);
          }}
        />
      ))}
    </div>
  );
};

export default Users;
