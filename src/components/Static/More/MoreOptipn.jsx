import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import TitleHeader from "../Header/TitleHeader";
import {_getThemeColor} from "../../../config/Config";

const MoreOptipn = () => {

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

  const { id } = useParams();
  const Facebook = () => {
    window.open("https://www.facebook.com/Nowgray/");
  };
  return (
    <>
      <TitleHeader title="More" />
      <div className="container">
        <div className="Rounded-Border">
          <div
            className="row justify-content-center mx-2"
            style={{ color: "#11a5d2" }}
          >
            <div className="col-12 mt-4">
              <NavLink to={`/developedBy/${id}`}>
                <div className="Fare-Cal p-2" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>
                  <div className="row align-items-center">
                    <div className="col-9">
                      <h5>&nbsp; &nbsp; Developed By</h5>
                    </div>
                    <div className="col-2">
                      <i className="bi bi-code-slash fs-1"></i>
                    </div>
                  </div>
                </div>
              </NavLink>
              <br />
              <NavLink to={`/about/${id}`}>
                <div className="Fare-Cal p-2" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>
                  <div className="row  align-items-center">
                    <div className="col-9">
                      <h5>&nbsp; &nbsp; About us</h5>
                    </div>
                    <div className="col-2">
                      <i className="bi bi-people fs-1"></i>
                    </div>
                  </div>
                </div>
              </NavLink>
              <br />
              <div className="Fare-Cal p-2" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>
                <div className="row  align-items-center">
                  <div className="col-9" onClick={Facebook}>
                    <h5>&nbsp; &nbsp; Join Us On Facebook</h5>
                  </div>
                  <div className="col-2">
                    <i className="bi bi-facebook fs-1"></i>
                  </div>
                </div>
              </div>
              <br />
              <NavLink to={`/disclaimer/${id}`}>
                <div className="Fare-Cal p-2" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>
                  <div className="row  align-items-center">
                    <div className="col-9">
                      <h5>&nbsp; &nbsp; Disclaimer</h5>
                    </div>
                    <div className="col-2">
                      <i className="bi bi-chat-square-text fs-1"></i>
                    </div>
                  </div>
                </div>
              </NavLink>
              <br />
              <NavLink to={`/privacy/${id}`}>
                <div className="Fare-Cal p-2" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>
                  <div className="row  align-items-center">
                    <div className="col-9">
                      <h5>&nbsp; &nbsp; Privacy Policy</h5>
                    </div>
                    <div className="col-2">
                      <i className="bi bi-card-text fs-1"></i>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoreOptipn;
