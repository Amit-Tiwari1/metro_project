import React from "react";
import StationMaster from "../components/Dynamic/Station_Master/StationMaster";
import Header from "../components/Static/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <StationMaster />
      </div>
    </>
  );
};

export default Home;
