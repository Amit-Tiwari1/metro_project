import React, { useEffect, useState } from "react";
import MetroCard from "../Merto_card/MetroCard";
import { Link, NavLink } from "react-router-dom";
import Loader from "../../Static/Loader/Loader";
import { useParams} from "react-router-dom";
import HomeLoader from "../../Static/Loader/HomeLoader";
import { _getThemeColor } from "../../../config/Config";
import "./StationOptions.css";
import { useDispatch, useSelector } from "react-redux";
import { AllStationOfMasterStation, stationBetween } from "../../../slices/StationSlice";
import { getFare } from "../../../slices/FareSlice";
import jaipurJsonData from "../../../JsonData";


const StationOptions = () => {
  // console.log("jaipurJsonData", jaipurJsonData);
  const { id, from, to } = useParams();
  const dispatch = useDispatch();
  const [stationOption, setStationOption] = useState({
    From: "",
    To: "",
  });
  const [show, SetShow] = useState(false);
  const [ParamFromStation, setParamFromStation] = useState();
  const [ParamToStation, setParamToStation] = useState();
  const [themColors, setThemColors] = useState(null);
  // ------ get data from redux (start) ------------>
  const fareloading = useSelector((state) => state.fare.loading);
  const Fare = useSelector((state) => state.fare.fare);
  const stationBetweenValue = useSelector(
    (state) => state.station.StationBetween
  );

  console.log("stationBetween", stationBetweenValue);
  // -----------(end)-------------------------------->

  // -------- get color ---------------
  useEffect(() => {
    const themeClr = async () => {
      const themeColor = await _getThemeColor();
      setThemColors(themeColor);
    };
    themeClr();
  }, []);

  /* -------- Call GetAllData ---------------------------------------------------*/
  useEffect(() => {
    from && GetAllData();
  }, [from, to]);

  /* --------getfare call funtion  ---------------------------------------------------*/
  const fareValue = async (from, to) => {
    const fare = dispatch(getFare({ from, to }));
    
  };
  /* -------- station between  call funtion  ---------------------------------------------------*/
  const stationBitween = async (from, to) => {
    const bitween = dispatch(stationBetween({ from, to }));

  };
 

  const GetAllData = () => {
    const cleanFromStation = from
      ? from.replace(/-/g, " ").replace(/ /g, " ")
      : null;
    const cleanToStation = to ? to.replace(/-/g, " ").replace(/ /g, " ") : null;
    const splitcleanToStation = cleanToStation.split("metro station")[0];
    setParamFromStation(cleanFromStation);
    setParamToStation(splitcleanToStation);
    fareValue(cleanFromStation, splitcleanToStation);
    stationBitween(cleanFromStation, splitcleanToStation);
    SetShow(true);
  };

//  -------- call AllStationOfMasterStation method  -----------
  useEffect(() => {
    dispatch(AllStationOfMasterStation(id));
  }, []);
  
  const allstatonOfMaster = useSelector(
    (state) => state.station.AllStationMstr
  );

   if (allstatonOfMaster === null || allstatonOfMaster.length === 0) {
     return <HomeLoader />;
   }


  /* -------- For from Station ---------------------------------------------------*/
  const handleStationChange = (e) => {
    const newStationValue = e.target.value;
    setStationOption((prev) => ({
      ...prev,
      From: newStationValue,
    }));
  };
  /* -------- For to Station ---------------------------------------------------*/
  const handleToChange = (e) => {
    const newToValue = e.target.value;
    setStationOption((prev) => ({
      ...prev,
      To: newToValue,
    }));
  };
 
 const getStationName = JSON.parse(localStorage.getItem("Station_Name")).name;
  return (
    <>
      <div className="container">
        {/* ---------------- Metro Station Select option ---------------------------------------------------*/}
        <div className="row justify-content-center m-0 Rounded-Border-Box">
          <div
            className={`col-md-6 col-10 Fare-Cal`}
            style={{
              background: `linear-gradient(to right, ${
                themColors ? themColors : "initial"
              }, #2d2d47)`,
            }}
          >
            <div>
              <label>From:</label>

              <select
                onChange={handleStationChange}
                style={{
                  background: `linear-gradient(to right, ${
                    themColors ? themColors : "initial"
                  }, #2d2d47)`,
                }}
              >
                <option value={ParamFromStation || ""}>
                  {ParamFromStation || "--Select--"}
                </option>
                {allstatonOfMaster.map((item, index) => {
                  return (
                    <option key={index} value={item?.station_Name}>
                      {item?.station_Name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label>To:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select
                onChange={handleToChange}
                style={{
                  background: `linear-gradient(to right, ${
                    themColors ? themColors : "initial"
                  }, #2d2d47)`,
                }}
              >
                <option value={ParamToStation || ""}>
                  {ParamToStation || "--Select--"}
                </option>
                {allstatonOfMaster.map((item, index) => {
                  return (
                    <option key={index} value={item?.station_Name}>
                      {item?.station_Name}
                    </option>
                  );
                })}
                ;
              </select>
            </div>

            <Link
              to={`/metroStation/${id}/from-${encodeURIComponent(
                stationOption.From
              ).replace(/%20/g, "-")}/to-${encodeURIComponent(
                stationOption.To
              ).replace(/%20/g, "-")}-metro-station-${encodeURIComponent(
                getStationName
              ).replace(/%20/g, "-")}`}
              className="btn btn-outline-danger float-end text-warning"
            >
              Get Fare
            </Link>
          </div>
        </div>
        <br />
        {/*--------------------------------------------------------------------------------------------------- */}
        {/* -------------------- Metro Stations Details ------------------------------------------------------*/}

        <div className="Rounded-Border">
          {fareloading ? (
            <Loader />
          ) : (
            <section className={show ? "details_show" : "details_hide"}>
              <div className="container">
                <div className="row justify-content-center  pt-4 px-3 ">
                  <div
                    className="Fare-Cal"
                    style={{
                      background: `linear-gradient(to right, ${
                        themColors ? themColors : "initial"
                      }, #2d2d47)`,
                    }}
                  >
                    <div className="col-md-12 col-12 ">
                      <div className="row">
                        <div className="col-6 text-white text-center">
                          <h6>Start Station</h6>
                          <p className="m-0">
                            <i className="bi bi-train-front"></i>&nbsp;
                            {Fare[0]?.start_Station}
                          </p>
                        </div>

                        <div className="col-6 text-white text-center">
                          <h6>End Station</h6>
                          <p className="m-0">
                            <i className="bi bi-train-front"></i>&nbsp;
                            {Fare[0]?.end_Station}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-6 text-white text-center">
                          <h6>Travel Time</h6>
                          <p className="m-0">
                            <i className="bi bi-alarm-fill"></i>&nbsp;
                            {Fare[0]?.travel_Time}
                          </p>
                        </div>

                        <div className="col-6 text-white text-center">
                          <h6>Token Fare</h6>
                          <p className="m-0">
                            ₹&nbsp;
                            {Fare[0]?.fare_Value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center mt-4 px-3">
                  <div
                    className="Fare-Cal"
                    style={{
                      background: `linear-gradient(to right, ${
                        themColors ? themColors : "initial"
                      }, #2D2D47)`,
                    }}
                  >
                    {/* station summary from accounding to route id */}

                    <div className="col-12 col-md-12">
                      <div className="text-center mt-2 px-5">
                        <h3>Station Summary</h3>
                        <hr />
                      </div>
                      <div className="d-flex justify-content-center align-items-center p-2">
                        <div className="col-md-2 col-2">
                          {/* route start symbol image */}
                          <div className="d-flex justify-content-center">
                            <i
                              className="bi bi-train-front"
                              style={{
                                background: "green",
                                padding: 5,
                                borderRadius: "100%",
                              }}
                            ></i>
                          </div>

                          {/* route image */}
                          {stationBetweenValue.map((items, index) => {
                            return (
                              <div
                                key={index}
                                className="d-flex justify-content-center"
                              >
                                <img
                                  src="/Images/railroad.png"
                                  height="41px"
                                  alt="track"
                                  style={{ filter: "invert(1)" }}
                                />
                              </div>
                            );
                          })}
                          {/* route end symbol icon */}
                          <div className="d-flex justify-content-center">
                            <i
                              className="bi bi-train-front"
                              style={{
                                background: "red",
                                padding: 5,
                                borderRadius: "100%",
                              }}
                            ></i>
                          </div>
                        </div>
                        {/* all station from start to end  */}
                        <div className=" col-md-6 col-9">
                          {stationBetweenValue.map((items, index) => {
                            return (
                              <h6 className="p-2 text-white" key={index}>
                                <i className="bi bi-train-front"></i>
                                &nbsp;&nbsp;
                                <NavLink to={`/details/${items.station_Code}`}>
                                  <span
                                    onClick={() =>
                                      console.log(
                                        "station_code",
                                        items.station_Code
                                      )
                                    }
                                  >
                                    {items.station_Name}
                                  </span>
                                </NavLink>
                              </h6>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {/* ---------------------------------------------------------------------------------------------- */}
          <MetroCard />
        </div>
      </div>
    </>
  );
};

export default StationOptions;
