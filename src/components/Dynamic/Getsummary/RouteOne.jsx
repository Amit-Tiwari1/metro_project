import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../Context/Context";
import axios from "axios";
import MetroCard from "../Merto_card/MetroCard";
import { Link, NavLink } from "react-router-dom";
import Loader from "../../Static/Loader/Loader";
import { useParams, useLocation } from "react-router-dom";
import HomeLoader from "../../Static/Loader/HomeLoader";
import { _getThemeColor } from "../../../config/Config";

const StationOptions = () => {
  const { id, from, to } = useParams();
  const location = useLocation();

  const { API_URL } = useGlobalContext();
  const [stationOption, setStationOption] = useState({
    From: "",
    To: "",
  });

  // const { From, To } = stationOption;
  const [Fare, setFare] = useState([]);
  const [StationBetween, setStationBetween] = useState([]);
  const [show, SetShow] = useState(false);
  const [StationsMasterD, setStationsMasterD] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [ParamFromStation, setParamFromStation] = useState();
  const [ParamToStation, setParamToStation] = useState();
  const [themColors, setThemColors] = useState(null);
  const [routeId, setRouteId] = useState("");

  const getRouteId = async (id) => {
    const data = await axios.get(`${API_URL}Station/GetMasterStation?id=3`);
    setRouteId(data.data);
    console.log("getRouteId", data);
  };

  console.log("stationBetween", routeId);

  useEffect(() => {
    getRouteId();
  }, [id]);

  // get data from
  useEffect(() => {
    const themeClr = async () => {
      const themeColor = await _getThemeColor();
      setThemColors(themeColor);
    };
    themeClr();
  }, []);
  // console.log("themColors",themColors)

  /* -------- Call Station api ---------------------------------------------------*/
  useEffect(() => {
    from && GetAllData();
  }, [from, to]);
  const StationsMaster = async () => {
    setIsLoading(true);
    const MasterStation = await axios.get(
      `${API_URL}Station/GetMasterStation?id=${id}`
    );
    setStationsMasterD(MasterStation.data);
    setIsLoading(false);
  };
  /* -------- Call Station api ---------------------------------------------------*/

  /* -------- All Stations Fares ---------------------------------------------------*/
  const getFare = async (from, to) => {
    setIsLoading(true);
    const data = await axios.get(`${API_URL}Fare/${from},${to}`);
    // console.log("getFare wla", data);
    setFare(data.data[0]);
    setIsLoading(false);
  };

  const GetAllData = () => {
    const cleanFromStation = from
      ? from.replace(/-/g, " ").replace(/ /g, " ")
      : null;
    const cleanToStation = to ? to.replace(/-/g, " ").replace(/ /g, " ") : null;
    const splitcleanToStation = cleanToStation.split("metro station")[0];
    setParamFromStation(cleanFromStation);
    setParamToStation(splitcleanToStation);
    getFare(cleanFromStation, splitcleanToStation);
    Stations(cleanFromStation, splitcleanToStation);
    SetShow(true);
  };

  useEffect(() => {
    StationsMaster();
    // if (location.search) {
    //   const urlParams = new URLSearchParams(location.search);
    //   const fromStation = urlParams.get("from");
    //   const toStation = urlParams.get("to");

    //   const cleanFromStation = fromStation
    //     ? fromStation.replace(/-/g, " ").replace(/ /g, " ")
    //     : null;
    //   const cleanToStation = toStation
    //     ? toStation.replace(/-/g, " ").replace(/ /g, " ")
    //     : null;

    //   setParamFromStation(cleanFromStation);
    //   setParamToStation(cleanToStation);
    //   console.log("From station:", cleanFromStation);
    //   console.log("To station:", cleanToStation);
    // }
  }, [location.search]);
  /* -------- All Stations Fares ---------------------------------------------------*/

  /* -------- Station Between to station ---------------------------------------------------*/
  const Stations = async (from, to) => {
    const AllStation = await axios.get(
      `${API_URL}Station/StationsBetweenTwoPoints?startStation=${from}&endStation=${to}`
    );
    // console.log("AllStation", AllStation);
    setStationBetween(AllStation.data);
  };
  /* -------- Station Between to station ---------------------------------------------------*/

  if (StationsMasterD === null || StationsMasterD.length === 0) {
    return <HomeLoader />;
  }

  /* -------- For from Station ---------------------------------------------------*/
  const handleStationChange = (e) => {
    const newStationValue = e.target.value;

    // Update the state
    setStationOption((prev) => ({
      ...prev,
      From: newStationValue,
    }));
  };
  /* -------- For from Station ---------------------------------------------------*/
  /* -------- For to Station ---------------------------------------------------*/
  const handleToChange = (e) => {
    const newToValue = e.target.value;

    setStationOption((prev) => ({
      ...prev,
      To: newToValue,
    }));

    // const newUrl = createNewUrl(stationOption.From, newToValue);
    // window.history.pushState(null, "", newUrl);
  };
  /* -------- For to Station ---------------------------------------------------*/

  /* -------- Update new url ---------------------------------------------------*/

  const getStationName = JSON.parse(localStorage.getItem("Station_Name")).name;
  // const createNewUrl = (fromValue, toValue) => {
  //   const fromEncoded = encodeURIComponent(fromValue).replace(/%20/g, "-");
  //   const toEncoded = encodeURIComponent(toValue).replace(/%20/g, "-");
  //   return `?from=${fromEncoded}&to=${toEncoded}-motro-station-${getStationName}`;
  // };
  /* -------- Update new url ---------------------------------------------------*/
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
              <label>Form:</label>
              {/* {ParamFromStation ? (
                <select>
                  <option value={ParamFromStation}>{ParamFromStation}</option>
                </select>
              ) : ( */}
              <select
                onChange={handleStationChange}
                style={{
                  background: `linear-gradient(to right, ${
                    themColors ? themColors : "initial"
                  }, #2d2d47)`,
                }}
              >
                <option
                  value={ParamFromStation || ""}
                  style={{
                    background: `linear-gradient(to right, ${
                      themColors ? themColors : "initial"
                    }, #2d2d47)`,
                  }}
                >
                  {ParamFromStation || "--Select--"}
                </option>
                {StationsMasterD.map((item, index) => {
                  return (
                    <option key={index} value={item?.station_Name}>
                      {item?.station_Name}
                    </option>
                  );
                })}
              </select>
              {/* )} */}
            </div>
            <div>
              <label>To:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {/* {ParamToStation ? (
                <select>
                  <option value={ParamToStation}>{ParamToStation}</option>
                </select>
              ) : ( */}
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
                {StationsMasterD.map((item, index) => {
                  return (
                    <option key={index} value={item?.station_Name}>
                      {item?.station_Name}
                    </option>
                  );
                })}
                ;
              </select>
              {/* )} */}
            </div>

            <Link
              to={`/metroStation/${id}/from-${encodeURIComponent(
                stationOption.From
              ).replace(/%20/g, "-")}/to-${encodeURIComponent(
                stationOption.To
              ).replace(/%20/g, "-")}-metro-station-${encodeURIComponent(
                getStationName
              ).replace(/%20/g, "-")}`}
              className="btn btn-outline-danger float-end"
            >
              Get Fare
            </Link>
            {/* <button
              type="button"
              className="btn btn-outline-danger float-end"
              onClick={GetAllData}
            >
              Get Fare
            </button> */}
          </div>
        </div>
        <br />
        {/*--------------------------------------------------------------------------------------------------- */}

        {/* -------------------- Metro Stations Details ------------------------------------------------------*/}

        <div className="Rounded-Border">
          {isLoading ? (
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
                            {Fare?.start_Station}
                          </p>
                        </div>

                        <div className="col-6 text-white text-center">
                          <h6>End Station</h6>
                          <p className="m-0">
                            <i className="bi bi-train-front"></i>&nbsp;
                            {Fare?.end_Station}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-6 text-white text-center">
                          <h6>Travel Time</h6>
                          <p className="m-0">
                            <i className="bi bi-alarm-fill"></i>&nbsp;
                            {Fare?.travel_Time}
                          </p>
                        </div>

                        <div className="col-6 text-white text-center">
                          <h6>Token Fare</h6>
                          <p className="m-0">₹&nbsp;{Fare?.fare_Value}</p>
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

                    {
                      <div className="col-12 col-md-12">
                        <div className="text-center mt-2 px-5">
                          <h3>Station Summary</h3>
                          <hr />
                        </div>
                        <div className="row justify-content-center align-items-center p-2">
                          <div className="col-md-2 col-2">
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
                            {StationBetween.map((items, index) => {
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
                          <div className=" col-md-6 col-9">
                            {StationBetween.map((items, index) => {
                              return (
                                <h6 className="p-2 text-white" key={index}>
                                  <i className="bi bi-train-front"></i>
                                  &nbsp;&nbsp;
                                  <NavLink
                                    to={`/details/${items.station_Code}`}
                                  >
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
                    }
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
