import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col m-2 p-2 shadow-lg ">
      <div className="flex col-span-1  ">
        <img
          onClick={()=>toggleMenuHandler()}
          alt="menu"
          className="h-10 mx-2 cursor-pointer"
          src="https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-256.png"
        />
        <img
          alt="logo"
          className="h-8 mx-2 rounded-md"
          src="https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg"
        />
      </div>
      <div className="col-span-10 text-center ">
        <input
          className="w-1/3 border border-gray-800 rounded-bl-md"
          type="text"
        ></input>
        <button className="mx-2 px-2 border border-blue-400 rounded-r-md bg-gray-400">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          alt="icon"
          className="h-8"
          src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
