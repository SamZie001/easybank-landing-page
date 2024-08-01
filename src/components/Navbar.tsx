import { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="bg-secondary fixed top-0 w-full h-16 z-40 md:relative">
      {/* Desktop Nav */}
      <div className="container | hidden md:flex justify-between h-full">
        <div className="object-contain w-52 flex items-center">
          <img src={logo} className="w-full" alt="easybank" />
        </div>

        <div className="desktop-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Blog</a>
          <a href="#">Careers</a>
        </div>

        <div className="flex justify-end items-center">
          <button className="btn">Request Invite</button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="container | flex md:hidden justify-between items-center h-full">
        <div className="object-contain w-44 flex items-center">
          <img src={logo} className="w-full" alt="" />
        </div>

        <div
          className="object-cover w-7 cursor-pointer flex items-center"
          onClick={() => setShow((prev) => !prev)}
        >
          <img
            src={show ? close : hamburger}
            className="w-full"
            alt="easybank"
          />
        </div>

        {show && (
          <div className="fixed top-16 z-30 left-0 w-full bg-primary/50 h-full flex py-8 px-10 justify-center">
            <div className="mobile-nav | bg-secondary h-max w-full rounded-md flex flex-col items-center p-10">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
