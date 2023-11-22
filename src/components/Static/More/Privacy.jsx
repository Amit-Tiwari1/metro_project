import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import TitleHeader from "../Header/TitleHeader";
import {_getThemeColor} from "../../../config/Config";

const Privacy = () => {
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
  return (
    <>
      <TitleHeader title="Privacy Policy" />
      <div className="container">
        <div className="Rounded-Border">
          <div className="row justify-content-center">
            <div className="col-11 col-md-10 ">
              <br /> <br />
              <h6 className="text-center Fare-Cal" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>Privacy Policy</h6>
              <br />
              <h4 className="text-center">
                Privacy Policy for <b>Nearbymetro</b>
              </h4>
              {/* <div className="Rounded-Border"></div> */}
              <hr />
              {/* <p> */}
              <ul>
                <li className="mb-1">
                  At Metro App, your privacy is our top priority.
                </li>
                <li className="mb-1">
                  We collect only necessary personal information through cookies
                  to enhance the functionality and user experience of our app.
                </li>
                <li className="mb-1">
                  We do not gather or store any public data.
                </li>
                <li className="mb-1">
                  Rest assured, your information will never be shared with third
                  parties without obtaining your explicit consent.
                </li>
                <li className="mb-1">
                  We have implemented robust security measures to safeguard your
                  data from unauthorized access.
                </li>
                <li className="mb-1">
                  Please note that our policy may be updated periodically, and
                  your continued use of Metro App signifies your acceptance of
                  the most recent version.
                </li>
                <li className="mb-1">
                  We are committed to protecting your privacy and ensuring a
                  secure app experience.
                </li>
              </ul>
              {/* </p> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
