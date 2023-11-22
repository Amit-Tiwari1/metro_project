import React, { useEffect, useState } from "react";
import TitleHeader from "../Header/TitleHeader";
import Footer from "../Footer/Footer";
import {_getThemeColor} from "../../../config/Config";

const DevelopedBy = () => {
  const [themColors, setThemColors] = useState(null)
  // get data from config
  useEffect(()=>{
   const themeClr = async ()=>{
    const themeColor = await _getThemeColor()
    setThemColors(themeColor)
   }
   themeClr()
  },[])
// end

  const Nowgray = () => {
    window.open("https://nowgray.com/");
  };
  const Facebook = () => {
    window.open("https://www.facebook.com/Nowgray/");
  };
  const Instagram = () => {
    window.open("https://www.instagram.com/nowgray/");
  };
  const linkedin = () => {
    window.open("https://nowgray.com/");
  };
  return (
    <>
      <TitleHeader title="Developed By" />
      <div className="container">
        <div className="Rounded-Border">
          <div className="row justify-content-center">
            <div className="col-11 col-md-10 ">
              <br /> <br />
              <h6 className="text-center Fare-Cal" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>Developed By</h6>
              <br />
              <div className="developerBox">
                <div>
                  <img src="/Images/nowgray_logo.jpg" alt="Metro_Logo" />
                </div>
                <div>
                  <h5>Nowgray It Services.</h5>
                  <hr />
                  Visit here &nbsp;
                  <span onClick={Nowgray} className="NowgrayLink">
                    Nowgray.com
                  </span>
                  <div className="d-flex justify-content-around mt-2">
                    <span onClick={Facebook}>
                      <i className="bi bi-facebook "></i>
                    </span>
                    <span onClick={Instagram}>
                      <i className="bi bi-instagram"></i>
                    </span>
                    <span onClick={linkedin}>
                      <i className="bi bi-linkedin"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DevelopedBy;
