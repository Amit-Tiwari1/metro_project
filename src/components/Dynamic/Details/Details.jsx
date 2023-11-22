// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import Footer from "../../Static/Footer/Footer";
import TitleHeader from "../../Static/Header/TitleHeader";
import { _getThemeColor } from "../../../config/Config";
const Details = () => {
  const { id } = useParams();
  const [themcolor , setThemColors] = useState();
  useEffect(() => {
    const themeClr = async () => {
      const themeColor = await _getThemeColor();
      setThemColors(themeColor);
    };
    themeClr();
  }, []);

  console.log("themcolor",themcolor)
  const OpenMap = () => {
    window.open("https://goo.gl/maps/LPR8g137qQiZxTfb6");
  };

  // const StationDetail = async () => {
  //     const DetailApi = await axios.get(`${API_URL}Station_Details/${id}`);
  //     console.log("Detail", DetailApi.data);
  // }
  useEffect(() => {
    // StationDetail();
  }, []);
  return (
    <>
      {/* <p>This is Id  {id}</p> */}
      <TitleHeader title="Station Details" />
      <div className="container" style={{
              background: `linear-gradient(to right, ${
                themcolor ? themcolor : "initial"
              }, #2d2d47)`,
            }}>
        <br />
        <div className="row justify-content-between align-items-center mx-3 Fare-Cal ">
          <div className="col-8">
            <h4>{id}</h4>
          </div>
          <div className="col-2">
            <i className="bi bi-train-front"></i>
          </div>
        </div>
        <br />
        <br />

        <div className="Rounded-Border" style={{
              background: `linear-gradient(to right, ${
                themcolor ? themcolor : "initial"
              }, #2d2d47)`,
            }}>
          <div className="row justify-content-center mt-3">
            <div className="col-md-8 col-11">
              <div className="row justify-content-between align-items-center mt-4">
                <div className="col-md-5 col-5 Fare-Cal">
                  <div className="text-center">
                    <i className="bi bi-info-circle"></i>&nbsp;&nbsp;
                    <span>Information</span>
                  </div>
                </div>
                <div className="col-md-5 col-5 Fare-Cal">
                  <div className="text-center">
                    <i className="bi bi-alarm-fill"></i>&nbsp;&nbsp;
                    <span>Timing</span>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-center mt-4">
                <div className="col-md-5 col-5 Fare-Cal">
                  <div className="text-center">
                    <i className="bi bi-p-circle"></i>&nbsp;&nbsp;
                    <span>Parking</span>;
                  </div>
                </div>
                <div className="col-md-5 col-5 Fare-Cal">
                  <div className="text-center">
                    <i className="bi bi-box-arrow-left"></i>&nbsp;&nbsp;
                    <span>Exit</span>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center align-items-center mt-4">
                <div
                  className="col-md-5 col-6 Fare-Cal"
                  onClick={() => OpenMap()}
                >
                  <div className="text-center">
                    <i className="bi bi-geo-alt"></i>&nbsp;&nbsp;
                    <span>Open in Map</span>
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

export default Details;
