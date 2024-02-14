import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Avatar from "../assets/images/avatar.png"

const Navbar = () => {
  const { handleLogOut, user } = useContext(AuthContext);
  const [toggleDropDown, setToggleDropDown] = useState(false)

  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <>
      <nav className="">
        <div className="nav_items">
          <h4>groupgo</h4>
          <ul className="relative">
            <li>Home</li>
            <li>Features</li>
            <li>How it works</li>
            <li>About us</li>
            {!user && <button className="rounded-[10px] bg-orange-clr px-[18px] py-2 text-white">
              Create event
            </button>}
            {user && <img onClick={() => setToggleDropDown(prev => !prev)} className="w-[48px] h-[48px] rounded-[999px] cursor-pointer" src={`${user.photoURL || Avatar}`} alt="" />}
            

            {user && toggleDropDown && <div className="shadow-lg flex flex-col items-start gap-[16px] rounded-[16px] px-[18px] py-[18px] absolute z-50 bg-white right-0 top-[50px]">
              <p className="text-[16px]">{user?.email}</p>
              <button onClick={handleLogOut}>logout</button>
            </div>}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
