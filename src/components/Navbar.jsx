import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav_items">
          <h4>groupgo</h4>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>How it works</li>
            <li>About us</li>
            <button className="rounded-[10px] bg-orange-clr px-[18px] py-2 text-white">
              Create event
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;