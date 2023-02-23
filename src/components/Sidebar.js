import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=> store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className="pl-4 shadow-lg col-span-1 w-40">
      <h2  className="font-semibold font-serif ">Home</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h2 className="font-semibold font-serif pt-4">Shorts</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h2 className="font-semibold font-serif pt-4">Subscritpions</h2>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
