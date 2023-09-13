import React from "react";

import GymHOC from "./HOC/Gym.HOC";
import GymLayout from  "./Layout/Gym.Layout";
//components
import Temp from "./Components/temp";
import Hero from "./Components/Mainpage";

function App() {
  return (
    <>
    <GymHOC path="/" element = {< GymLayout />} />
    <GymHOC path="/" exact Component ={ Hero } />
    

    </>
  )
}

export default App;
