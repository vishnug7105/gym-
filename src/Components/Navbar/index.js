import React from "react";
import { VscAccount } from "react-icons/vsc";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx"




export const SmNav = () => {
  const Menu = () => {

    <div className="p-2  bg-navcol-100 w-1/4  ">
   <RxCross2 className ="text-xl cursor:pointer"/>
   <h2 className ="p-2  pl-32 hover:shadow-md ">
      Home
   </h2>
   <h2 className ="p-2 pl-32 hover:shadow-md">
      Classes
   </h2>
   <h2 className ="p-2 pl-32  hover:shadow-md">
      Challenges
   </h2>
   <h2 className ="p-2 pl-32  hover:shadow-md">
      Plans
   </h2>
   <h2 className ="p-2 pl-32  hover:shadow-md">
      About
   </h2>
   <h2 className ="p-2 pl-32  hover:shadow-md">
      Contact
   </h2>
</div>

 };

  return(
    <div className=" flex justify-between bg-navcol-900 md:hidden p-5 shadow-md">
   <HiMenu
      className ="text-3xl text-white cursor-pointer  "/>
   <h2 className="  text-xl text-bold text-navcol-50 "> Fitness / Studio </h2>
   <button className="text-xl bg-blue-600 mr-1 px-1 py-1 cursor-pointer hover:bg-white hover:text-black ">
   Membership</button>
</div>
  )
};



export const LgNav = () => {
  return (
    <>
    <div className= " bg-navcol-900 w-full  flex justify-between shadow-md py-4 hidden lg:flex md:flex  ">
   <div className="flex gap-6 p-4 ml-16 cursor-pointer">
      <h2 className= "text-bold text-l text-white hover:text-gray-600 ">
         Home
      </h2>
      <h2 className= "text-bold text-l text-white hover:text-gray-600 ">
         About
      </h2>
      <h2 className= "text-bold text-l text-white hover:text-gray-600 ">
         Classes
      </h2>
      <h2 className= "text-bold text-l text-white hover:text-gray-600 ">
         Challenges
      </h2>
      <h2 className= "text-bold text-l text-white hover:text-gray-600 ">
         Plans
      </h2>
      <h2 className= "text-bold text-l text-white  hover:text-gray-600 ">
         Contact
      </h2>
   </div>
   <div className="flex items-center gap-2 pr-10 ">
      <button  className="bg-blue-600 text-white mt-4 px-2 py-2 hover:bg-white hover:text-black  "> Membership</button>
      <span className ="text-2xl mt-4 border-gray-400 bg-gray-200 text-gray-600 rounded-full  px-2 py-2  ">
         <VscAccount />
      </span>
      <h2 className="text-xl text-white mt-3 hover:text-gray-800 cursor-pointer">
         Login
      </h2>
   </div>
</div>
    </>
  )
}

const Navbar = () =>{
  return(
    <nav>

    <SmNav/>
    <LgNav/>
    </nav>
  )
}


export default Navbar;
