import React, { useEffect, useState } from "react";
import "../../../App.css";
import { NavLink, useParams } from "react-router-dom";
import {_getThemeColor} from "../../../config/Config";
const Footer = () => {

  const [themColors, setThemColors] = useState(null)
  // get data from config
  useEffect(()=>{
   const themeClr = async ()=>{
    const themeColor = await _getThemeColor()
    setThemColors(themeColor)
   }
   themeClr()
  },[])



  const { id } = useParams();


  return (
    <>
      <footer style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }} >
        {/* <h1>{id}</h1> */}
        <div className="container">
          <div className="d-flex justify-content-around align-items-center text-center">
            <NavLink to="/">
              <div className="footer-Icon">
                <i className="bi bi-house-door-fill"></i>
              </div>
            </NavLink>
            <NavLink to={`/metroStation/${id}`}>
              <div className="footer-Icon">
                <i className="bi bi-cash"></i>
              </div>
            </NavLink>
            <NavLink to={`/routes/${id}`}>
              <div className="footer-Icon">
                <i className="bi bi-train-freight-front"></i>
              </div>
            </NavLink>
            <NavLink to={`/Blog/${id}`}>
              <div className="footer-Icon">
                <i className="bi bi-person-hearts"></i>
              </div>
            </NavLink>
            <NavLink to={`/more/${id}`}>
              <div className="footer-Icon">
                <i className="bi bi-border-width"></i>
              </div>
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
