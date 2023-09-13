import React, { Component }from "react";
import { Routes, Route } from "react-router-dom";
//Layout
import GymLayout from "../Layout/Gym.Layout";

const GymHOC = ({component: Component, ...rest}) => {
  return(
    <>
    <Routes>
    <Route
    {...rest}

    component = {(props) => (
      <GymLayout>
        <Component{...rest} />
      </GymLayout>
    )}
    />
    </Routes>

    </>
  );
};

export default GymHOC;
