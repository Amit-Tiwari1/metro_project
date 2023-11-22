import React, { useEffect, useState } from "react";
import "../../../App.css";
import BackBtn from "../BackBtn/BackBtn";
import {_getThemeColor} from "../../../config/Config";

const TitleHeader = (props) => {
  const [themColors, setThemColors] = useState(null)
  // get data from config
  useEffect(()=>{
   const themeClr = async ()=>{
    const themeColor = await _getThemeColor()
    setThemColors(themeColor)
   }
   themeClr()
  },[])

  return (
    <>
      <header
        className="w-100 position-sticky top-0 px-2 mb-4 theme_Color"
        style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}
      >
        <div className=" d-flex justify-content-between align-items-center">
          <div className="logo p-3">
            <h2 className="text-white">{props.title}</h2>
          </div>
          <BackBtn />
        </div>
      </header>
    </>
  );
};

export default TitleHeader;
