import React from "react";
import { useSelector } from "react-redux";

export default function () {
  const currentUserData = useSelector((state) => state.currentUser);
  console.log(currentUserData.value.payload);
  return (
    <div>
      <div className="h-3 m-2">Customer Details</div>
      <div className="m-2">id: {currentUserData.value.payload.id}</div>
      <div className="m-2">email: {currentUserData.value.payload.email}</div>
      <div className="m-2">
        First Name: {currentUserData.value.payload.first_name}
      </div>
      <div className="m-2">
        Last Name: {currentUserData.value.payload.last_name}
      </div>
    </div>
  );
}
