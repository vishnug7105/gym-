import React from "react";

//Components
import Navbar  from "../Components/Navbar";

const GymLayout = (props) =>{
  return(
    <>
    <div>
    <Navbar />
    { props.children }
    </div>
    </>
  )
};

export default GymLayout;
