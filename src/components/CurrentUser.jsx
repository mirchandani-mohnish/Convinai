import React from "react";
import { useSelector } from "react-redux";

export default function () {
  const currentUserData = useSelector((state) => state.currentUser);
  console.log(currentUserData.value.payload.id);
  return <div>{currentUserData.value.payload.id}</div>;
}
