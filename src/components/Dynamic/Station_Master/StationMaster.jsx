import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllStations } from "../../../slices/StationSlice";
import { NavLink } from "react-router-dom";

const StationMaster = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    fetchStationdata();
  },[dispatch]);
  
  const fetchStationdata = async () => {
    const masters = await dispatch(AllStations());
  };
   const MasterStation = useSelector((state) => state.station.MasterStaions); 
   console.log("MasterStation", MasterStation);
     
  return (
    <div>
      <div className="container">
        <div className="Rounded-Border">
          <div className="row justify-content-center p-3">
            <div className="col-md-8 col-12 shadow-sm ">
              <h3 className="text-center mt-2 text-muted">
                Search Metro Route in India
              </h3>
              {MasterStation &&
                MasterStation.filter(
                  (station) =>
                    station.name === "Lucknow" ||
                    station.name === "Kochi" ||
                    station.name === "Jaipur" ||
                    station.name === "Mumbai" ||
                    station.name === "Gurgaon"
                ).map((station) => {
                  return (
                    <NavLink
                      to={`metroStation/${station.metro_ID}`}
                      key={station.metro_ID}
                    >
                      <div
                        className="shadow-sm p-3 mb-3 mt-4 text-white rounded border theme_Color"
                        onClick={() =>
                          localStorage.setItem(
                            "Station_Name",
                            JSON.stringify(station)
                          )
                        }
                      >
                        <h6 title={`${station.name} Metro Routes Map`}>
                          {station.name}&nbsp;Metro
                        </h6>
                      </div>
                    </NavLink>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationMaster;
