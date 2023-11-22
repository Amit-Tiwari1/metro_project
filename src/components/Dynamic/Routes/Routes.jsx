import React, { useEffect, useState } from "react";
// import { useGlobalContext } from "../../../Context/Context";
import "../../../App.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Static/Footer/Footer";
import TitleHeader from "../../Static/Header/TitleHeader";
import {_getThemeColor} from "../../../config/Config"
import { useDispatch, useSelector } from "react-redux";
import { AllStationOfMasterStation } from "../../../slices/StationSlice";

const Routes = () => {
  const dispatch = useDispatch();
  const [themColors, setThemColors] = useState(null)
  const { id } = useParams();
  const allMetroId = useSelector((state) => state.station.AllStationMstr);

useEffect(() => {
  dispatch(AllStationOfMasterStation(id));
}, [id]);


console.log("allMetro id ", allMetroId);

  // get data from 
  useEffect(()=>{
    const themeClr = async ()=>{
     const themeColor = await _getThemeColor()
     setThemColors(themeColor)
    }
    themeClr()
    console.log("themColors",themColors)
   },[])

  return (
    <>
      <TitleHeader title="Metro Routes" />
      <div className="container">
        <Link>
          <div className="Fare-Cal mb-4"  style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>
            <div className="row align-items-center p-1 px-3">
              <div className="col-10">
                {/* <h4 className="m-0">{Routes1?.route_Name}</h4> */}
              </div>
              <div className="col-2">
                <i className="bi bi-bootstrap-reboot fs-2"></i>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/timing">
          <div className="Fare-Cal mb-4"  style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>
            <div className="row align-items-center p-1 px-3 ">
              <div className="col-10 ">
                <h4 className="m-0">Metro Timing</h4>
              </div>
              <div className="col-2">
                <i className="bi bi-alarm-fill fs-2"></i>
              </div>
            </div>
          </div>
        </Link>
        <div className="Rounded-Border">
          <br />
          {allMetroId.map((item, index) => {
            return (
              <div
                key={index}
                className="row justify-content-center align-items-center px-3"
              >
                <div className="col-3">
                  <p>
                    <i className="bi bi-train-front fs-5"></i>&nbsp;&nbsp;
                    {item?.sno}
                  </p>
                </div>
                <div className="col-7 text-center">
                  <h6>{item?.station_Name}</h6>
                </div>
                <div className="col-2">
                  <i className="bi bi-bootstrap-reboot fs-4"></i>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Routes;
