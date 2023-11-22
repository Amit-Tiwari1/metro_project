import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import TitleHeader from "../Header/TitleHeader";
import "../../../App.css";
import {_getThemeColor} from "../../../config/Config";

const Disclaimer = () => {
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

  const Mail = () => {
    window.open("mailto:nowgray@gmail.com");
  };
  return (
    <>
      <TitleHeader title="Disclaimer" />
      <div className="container">
        <div className="Rounded-Border">
          <div className="row justify-content-center">
            <div className="col-11 col-md-10 ">
              <br /> <br />
              <h6 className="text-center Fare-Cal" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>
                If you require any more information or have any questions about
                our "Lucknow Metro application” disclaimer, please feel free to
                contact us by email at&nbsp;
                <span className="" style={{ cursor: "pointer" }} onClick={Mail}>
                  <u>Nowgray@gmail.com</u>
                </span>
              </h6>{" "}
              <br />
              <h4>Disclaimers For Lucknow Metro Application</h4> <br />
              <p>
                All the information on this app - Lucknow Metro is published in
                good faith and for provides good information to our visitors.
                Lucknow Metro does not make any warranties about the
                completeness, reliability and accuracy of this information. Any
                action you take upon the information you find on this
                application (Lucknow Metro), is strictly at your own risk.
                Lucknow Metro will not be liable for any losses and/or damages
                in connection with the use of our application.
              </p>
              <b>
                Information provided here is from various ways, it's not from
                Officials of LMRC, we are not affiliated to LMRC. Please
                validate the time schedule and other details from official
                application of LMRC, We don't guaranty of any information
                provided to you from this and other related applications.
              </b>
              <br /> <br />
              <p>
                Please be also aware that when you leave our application, other
                application may have different privacy policies and terms which
                are beyond our control. Please be sure to check the Privacy
                Policies of these applications, as well as their
                <b>"Terms of Service"</b> before engaging in any business or
                uploading any information.
              </p>
              <br />
              <h4>Consent</h4>
              <p>
                By using our application, you hereby consent to our disclaimer
                and agree to its terms.
              </p>
              <br />
              <h4>Update</h4>
              <p>
                Should we update, amend or make any changes to this document,
                those changes will be prominently posted here.
              </p>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Disclaimer;
