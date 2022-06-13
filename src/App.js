import "./App.css";
import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appendToList, updateList } from "./redux/reducers/list";
import Users from "./components/Users";

const getUserList = async () => {
  const userList = await axios.get("https://reqres.in/api/users?page=2");
  console.log(userList);
  return userList;
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserList().then((data) => {
      dispatch(updateList(data.data.data));
    });
  }, []);

  console.log(
    "useSelector",
    useSelector((state) => state.userList)
  );
  return (
    <div className="App">
      <div className="absolute w-screen h-screen bg-gradient-to-r from-[#1A1A40] to-[#1B005A] overflow-hidden">
        <div className="m-5 p-5 rounded-lg border-solid bg-blue-400">
          <Users />
        </div>
        {/* <div className="h-screen w-screen -z-50">
          <motion.div
            whileInView={{
              position: "absolute",
              top: -10,
              left: -10,
              transition: {
                duration: 10,
                yoyo: Infinity,
              },
            }}
            className="right-5 top-20 absolute rounded-full bg-gradient-to-b from-[#7A0BC0] to-[#BA31BB] opacity-50 w-[600px] h-[600px] blur-3xl"
          ></motion.div>

          <motion.div
            whileInView={{
              position: "absolute",
              right: 0,
              top: 0,
              transition: {
                duration: 10,

                yoyo: Infinity,
              },
            }}
            className="left-40 bottom-56 absolute rounded-full bg-gradient-to-b from-[#7A0BC0] to-[#BA31BB] w-[200px] h-[200px] blur-lg rotate-[150deg]"
          ></motion.div>

          <motion.div
            whileInView={{
              position: "absolute",
              bottom: 30,
              right: 0,
              transition: {
                duration: 10,

                yoyo: Infinity,
              },
            }}
            className="right-40 bottom-[-150px] absolute rounded-full bg-gradient-to-b from-[#7A0BC0] to-[#BA31BB] w-[350px] h-[350px] blur-xl rotate-[30deg]"
          ></motion.div>

          <motion.div
            whileInView={{
              position: "absolute",
              bottom: 0,
              left: 0,
              transition: {
                duration: 10,

                yoyo: Infinity,
              },
            }}
            className="left-80 -bottom-[150px] absolute rounded-full bg-gradient-to-b from-[#7A0BC0] to-[#BA31BB] w-[300px] h-[300px] blur-2xl rotate-[30deg]"
          ></motion.div>

          <motion.div
            whileInView={{
              position: "absolute",
              right: 0,
              transition: {
                duration: 10,

                yoyo: Infinity,
              },
            }}
            className="top-8 right-60 absolute rounded-full bg-gradient-to-b from-[#7A0BC0] to-[#BA31BB] w-[130px] h-[130px] blur-[10px] rotate-[150deg]"
          ></motion.div>

          <motion.div
            whileInView={{
              opacity: 0,
              transition: {
                duration: 10,

                yoyo: Infinity,
              },
            }}
            className="left-[300px] top-40 absolute rounded-full bg-gradient-to-b from-[#7A0BC0] to-[#BA31BB] w-[340px] h-[340px] opacity-70 blur-3xl rotate-[150deg]"
          ></motion.div>

          <div className="right-[30rem] -top-[180px] absolute rounded-full bg-gradient-to-b from-[#7A0BC0] to-[#BA31BB] w-[340px] h-[340px] opacity-70 blur-3xl rotate-[150deg]"></div>

          <motion.div
            whileInView={{
              position: "absolute",
              top: -100,

              transition: {
                duration: 10,

                yoyo: Infinity,
              },
            }}
            className="-left-5 top-48 absolute rounded-full bg-gradient-to-b from-[#7A0BC0] to-[#BA31BB] w-[90px] h-[90px] opacity-70 rotate-[30deg]"
          ></motion.div>
        </div>
         */}
      </div>
    </div>
  );
}

export default App;
