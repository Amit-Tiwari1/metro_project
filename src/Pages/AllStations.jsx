// import React, { useEffect, useState } from "react";
import StationOptions from "../components/Dynamic/StationOptions/StationOptions";
import Footer from "../components/Static/Footer/Footer";
import TitleHeader from "../components/Static/Header/TitleHeader";
// import axios from "axios";
// import { useGlobalContext } from "../Context/Context";
// import { useParams } from "react-router-dom";
const Lucknow = () => {
  const StationName = JSON.parse(localStorage.getItem("Station_Name")).name;
  console.log(StationName);
  return (
    <>
      <div>
        <TitleHeader title={StationName} />
        <StationOptions />
        <Footer />
      </div>
    </>
  );
};

export default Lucknow;
