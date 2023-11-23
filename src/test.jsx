import React, { useState, useEffect } from "react";
import jaipurJsonData from "./JsonData";
function MetroRouteFinder() {
  // State variables to store input values and result stations
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [startStationRouteId, setStartStationRouteId] = useState(null);
  const [startStation_id, setStartStationId] = useState(null);
  const [endStationRouteId, setEndStationRouteId] = useState(null);
  const [endStation_id, setEndStationId] = useState(null);
  const [betweenStation, setbetweenStation] = useState([]);
  const [startStationRouteColor, setStartStationRouteColor] = useState("");
  const [endStationRouteColor, setEndStationRouteColor] = useState("");
  const handleFromChange = (e) => {
    setFromStation(e.target.value);
  };
  const handleToChange = (e) => {
    setToStation(e.target.value);
  };
  useEffect(() => {
    jaipurJsonData.forEach((stationData) => {
      if (stationData.station_Name === fromStation) {
        setStartStationRouteId(stationData.route_ID);
        setStartStationId(stationData.station_ID);
        setStartStationRouteColor(stationData.route_color);
      }
      if (stationData.station_Name === toStation) {
        setEndStationRouteId(stationData.route_ID);
        setEndStationId(stationData.station_ID);
        setEndStationRouteColor(stationData.route_color);
      }
    });
  }, [fromStation, toStation]);
  let StationVal = [];
  const handleGetValue = () => {
    if (
      startStationRouteId !== null &&
      endStationRouteId !== null &&
      startStationRouteId === endStationRouteId
    ) {
      jaipurJsonData.map((station) => {
        if (
          station.station_ID >= startStation_id &&
          station.station_ID <= endStation_id
        ) {
          // console.log(" station.station_ID", station.station_ID);
          StationVal.push(station.station_Name);
          setbetweenStation(StationVal);
        } else if (
          station.station_ID <= startStation_id &&
          station.station_ID >= endStation_id
        ) {
          StationVal.push(station.station_Name);
          // ---------- Sort in descending order based on the index ------------
          setbetweenStation(
            StationVal.sort(
              (a, b) =>
                jaipurJsonData.findIndex((item) => item.station_Name === b) -
                jaipurJsonData.findIndex((item) => item.station_Name === a)
            )
          );
          // ------------ end sort ---------
        }
      });
    } else {
      console.log("now multiple route needed");



      const getMultipleRouteStations = [];
      const allstation = []
      const multipleRoute = () => {
        jaipurJsonData.map((item)=>{
          if (
            item.station_ID >= startStation_id &&
            item.station_ID <= endStation_id 
           )
           {
            allstation.push(item); 
            console.log(allstation);
          }

          if (
            item.station_ID <= startStation_id &&
            item.station_ID >= endStation_id
          ) {
            allstation.push(item);
            console.log(allstation);
          }


        })
        for (let i = 0; i < allstation.length; i++) {
          const stations = allstation[i];

          if (stations.route_ID === startStationRouteId) {
            getMultipleRouteStations.push(stations.station_Name);
            console.log("stations getting", stations);
          } else {
            console.log("multiple routes station is not pushing");
          }
          if (stations.isJunction === "Yes") {
            break;
          }

          setbetweenStation(getMultipleRouteStations);
        }
      };
      multipleRoute();
    }
  };

  return (
    <>
      <div>
        <label>From:</label>
        <select onChange={handleFromChange}>
          <option value={"--Select--"}>{"--Select--"}</option>
          {jaipurJsonData.map((item, index) => (
            <option key={index} value={item?.station_Name}>
              {item?.station_Name}
            </option>
          ))}
        </select>
        
      </div>
      <div>
        <label>To:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select onChange={handleToChange}>
          <option value="Select">--Select--</option>
          {jaipurJsonData.map((item, index) => (
            <option key={index} value={item?.station_Name}>
              {item?.station_Name}
            </option>
          ))}
        </select>{" "}
        {"  "}
        <button onClick={handleGetValue}>Get value</button>
      </div>
      <div>
        <h3 id="heading" className="ms-3">
          {`Station between ${fromStation} and ${toStation}`}
        </h3>
        Route Color :- {startStationRouteColor}
        {betweenStation.map((stBetween, index) => (
          <li className="ms-5" key={index}>
            {stBetween}
          </li>
        ))}
        {/* multiple route section start */}
        <div className="starting_route">
          <h4>InterChange from :- {toStation}</h4>
          <h5>Route Color :- {endStationRouteColor}</h5>
        </div>
      </div>
    </>
  );
}
export default MetroRouteFinder;
