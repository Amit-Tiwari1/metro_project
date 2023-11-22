import React, { useState, useEffect } from "react";
import jaipurJsonData from "./JsonData";

function MetroRouteFinder() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [startStationRouteId, setStartStationRouteId] = useState(null);
  const [startStation_id, setStartStationid] = useState(null);
  const [endStationRouteId, setEndStationRouteId] = useState(null);
  const [endStation_id, setEndStationid] = useState(null);
  const [betweenStation, setBetweenStation] = useState([]);
  const [fromRouteColor, setFromRouteColor] = useState(null);
  const [toRouteColor, settoRouteColor] = useState(null);

  const handleFromChange = (e) => {
    setFromStation(e.target.value);
  };

  const handleToChange = (e) => {
    setToStation(e.target.value);
  };

  const renderDropdownOptions = () => {
    return jaipurJsonData.map((item, index) => (
      <option key={index} value={item.station_Name}>
        {item.station_Name}
      </option>
    ));
  };

  const filterStations = () => {
    const filteredStations = jaipurJsonData.filter((station) => {
      return (
        (station.station_ID >= startStation_id &&
          station.station_ID <= endStation_id) ||
        (station.station_ID <= startStation_id &&
          station.station_ID >= endStation_id)
      );
    });

    setBetweenStation(
      filteredStations
        .map((station) => station.station_Name)
        .sort(
          (a, b) =>
            jaipurJsonData.findIndex((item) => item.station_Name === b) -
            jaipurJsonData.findIndex((item) => item.station_Name === a)
        )
    );
  };

  const handleGetValue = () => {
    if (
      startStationRouteId !== null &&
      endStationRouteId !== null &&
      startStationRouteId === endStationRouteId
    ) {
      filterStations();
    } else {
      // You can handle route change more gracefully here.
      console.error("Route Change Here");
    }
  };

  useEffect(() => {
    jaipurJsonData.forEach((stationData) => {
      if (stationData.station_Name === fromStation) {
        setStartStationRouteId(stationData.route_ID);
        setStartStationid(stationData.station_ID);
        setFromRouteColor(stationData.route_color);
      }

      if (stationData.station_Name === toStation) {
        setEndStationRouteId(stationData.route_ID);
        setEndStationid(stationData.station_ID);
        settoRouteColor(stationData.route_color);
      }
    });
  }, [fromStation, toStation]);

  return (
    <>
      <div>
        <label>From:</label>
        <select onChange={handleFromChange}>
          <option value={"--Select--"}>{"--Select--"}</option>
          {renderDropdownOptions()}
        </select>
      </div>
      <div>
        <label>To:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select onChange={handleToChange}>
          <option value="Select">--Select--</option>
          {renderDropdownOptions()}
        </select>
        {"  "}
        <button onClick={handleGetValue}>Get value</button>
      </div>

      <div>
        <h2 id="heading" className="ms-3">
          {`Station between ${fromStation} and ${toStation}`}
        </h2>
        <h3>{fromRouteColor} Route</h3>
        {betweenStation.map((stBetween, index) => (
          <li className="ms-5" key={index}>
            {stBetween}
          </li>
        ))}
      </div>
      <div>
        <h2>Route change here -: {}</h2>
        {/* <h3>{toRouteColor} Route</h3>
        <h4>start_stationroute Id - {startStationRouteId}</h4>
        <h4>start station_id- {startStation_id}</h4>
        <h4>endstation_route_id {endStationRouteId}</h4>
        <h4>end station id{endStation_id}</h4>
        <h4> station between{betweenStation}</h4> */}
      </div>
    </>
  );
}

export default MetroRouteFinder;
