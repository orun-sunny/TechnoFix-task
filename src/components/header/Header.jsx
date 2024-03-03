import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/logo.png";
import { LuMoveRight } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navList = (
    <>
      <div className="relative group">
        <a to="/" className="lg:ml-3 flex items-center gap-1">
          Product <IoIosArrowDown className="mt-1" />
        </a>
        {/* Dropdown content */}
        <div className="absolute hidden lg:block left-0 top-full group-hover:duration-500 transition-all ease-in-out mt-4 w-[400px] bg-white shadow-md text-black z-[999999] border border-gray-200 rounded-lg p-2 opacity-0 group-hover:opacity-100 ">
          <div className="grid grid-cols-3">
            <ul className="flex flex-col items-center gap-4 p-2">
              <li>Product 1</li>
              <li>Product 1</li>
              <li>Product 1</li>
              <li>Product 1</li>
            </ul>
            <ul className="flex flex-col items-center gap-4 p-2">
              <li>Product 1</li>
              <li>Product 1</li>
              <li>Product 1</li>
              <li>Product 1</li>
            </ul>
            <ul className="flex flex-col items-center gap-4 p-2">
              <li>Product 1</li>
              <li>Product 1</li>
              <li>Product 1</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative group">
        <a to="/" className="lg:ml-3 flex items-center gap-1">
          Solutions <IoIosArrowDown className="mt-1" />
        </a>
        {/* Dropdown content */}
        <div className="absolute hidden lg:block left-0 top-full mt-4 w-[300px] bg-white shadow-md text-black z-[999999] border border-gray-200 rounded-lg p-2 opacity-0 group-hover:opacity-100 group-hover:duration-500 transition-all ease-in-out">
          <div className="">
            <ul className="flex flex-col  gap-4 px-2 py-3">
              <li>Solutions 1</li>
              <li>Solutions 2</li>
              <li>Solutions 3</li>
              <li>Solutions 4</li>
              <li>Solutions 5</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative group">
        <a to="/" className="lg:ml-3 flex items-center gap-1">
          Resources <IoIosArrowDown className="mt-1" />
        </a>
        {/* Dropdown content */}
        <div className="absolute hidden lg:block left-0 top-full mt-4 w-[300px] bg-white shadow-md text-black z-[999999] border border-gray-200 rounded-lg p-2 opacity-0 group-hover:opacity-100 group-hover:duration-500 transition-all ease-in-out">
          <div className="">
            <ul className="flex flex-col  gap-4 px-2 py-3">
              <li>Resources 1</li>
              <li>Resources 2</li>
              <li>Resources 3</li>
              <li>Resources 4</li>
              <li>Resources 5</li>
            </ul>
          </div>
        </div>
      </div>

      <a to="/services" className="lg:ml-4">
        Enterprise
      </a>
      <a to="/services" className="lg:ml-3">
        Pricing
      </a>
    </>
  );

  return (
    <div>
      {/* blur screen  */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>

      <div className="border-b  border-slate-300 shadow-sm">
        <div className="px-4 lg:px-9 py-3 mb-1">
          <div className="flex justify-between items-center">
            <div className="flex relative  items-center gap-4 ">
              <div className="logo">
                <img className="h-full w-full" src={logo} alt="logo" />
              </div>

              {/* Desktop menu */}
              <div className="hidden relative cursor-pointer lg:block mt-2 text-[17px]">
                <ul className="lg:flex lg:gap-2">{navList}</ul>
              </div>

              {/* Dropdown content */}
              <div className="absolute left-0 top-2 mt-2 h-10 w-10 bg-black z-[99999999999] border border-gray-200 rounded-lg p-2 opacity-0 group-hover:opacity-100 ">
                <a href="/">Submenu item 1</a>
                <a href="/">Submenu item 2</a>
                {/* Add more submenu items here */}
              </div>
            </div>

            {/* Mobile menu */}
            <div
              className={`${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } lg:hidden transition-all duration-500 border border-gray-200 shadow-lg backdrop-blur-sm transform  z-20 h-full w-full bg-white text-black absolute top-0 left-0`}
            >
              <button
                className="h-9 w-9 text-[26px] font-semibold flex absolute right-2 mt-[7px] rounded-full border border-black"
                onClick={() => setOpen(false)}
              >
                <RxCross1 className="mt-1 ml-1" />
              </button>

              <div className="border-b border-slate-200 py-3">
                <img className="w-[70px] mx-auto" src={logo} alt="" />
              </div>
              <ul className="flex cursor-pointer flex-col p-5 gap-5 overflow-y-auto text-[18px]">
                {navList}
              </ul>
            </div>

            <div className="flex items-center text-[17px] gap-1">
              <div className="hidden lg:flex items-center">
                <AiOutlineGlobal className="text-xl" />
                <button className="hidden lg:block ml-1 ">EN</button>
              </div>
              <div className="flex items-center">
                <button className="hidden lg:block lg:ml-4">
                  Contact Sales
                </button>
              </div>
              <div className="flex items-center">
                <button className="hidden lg:block lg:ml-4">Login</button>
              </div>
              <div className="flex items-center">
                <div className="">
                  <button className=" flex items-center font-normal gap-1 lg:gap-2 lg:ml-4 bg-[#4262FF] px-4 lg:px-5 py-2 text-[15px] lg:text-[17px] lg:py-[9px] rounded-full text-white">
                    Sign up free <LuMoveRight className="mt-[2px] " />
                  </button>
                </div>

                <IoMdMenu
                  className="text-3xl cursor-pointer lg:hidden ml-4"
                  onClick={toggleMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
