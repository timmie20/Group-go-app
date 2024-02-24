import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Avatar from "../assets/images/avatar.png";
import menuBar from "../assets/images/menu-bar.svg";

const Navbar = () => {
  const { handleLogOut, user } = useContext(AuthContext);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);
  return (
    <>
      <nav>
        <div className="nav_items">
          <h4>groupgo</h4>
          <ul className="relative">
            <li>Home</li>
            <li>Features</li>
            <li>How it works</li>
            <li>About us</li>
            {!user && (
              <button className="rounded-[10px] bg-orange-clr px-[18px] py-2 text-white">
                Create event
              </button>
            )}
            {user && (
              <img
                onClick={() => setToggleDropDown((prev) => !prev)}
                className="h-[48px] w-[48px] cursor-pointer rounded-[999px]"
                src={`${user.photoURL || Avatar}`}
                alt=""
              />
            )}

            {user && toggleDropDown && (
              <div className="absolute right-0 top-[50px] z-50 flex flex-col items-start gap-[16px] rounded-[16px] bg-white px-[18px] py-[18px] shadow-lg">
                <p className="text-[16px]">{user?.email}</p>
                <button onClick={handleLogOut}>logout</button>
              </div>
            )}
          </ul>
          <img className="tablet:hidden block" src={menuBar} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
