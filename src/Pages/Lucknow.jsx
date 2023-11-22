// import React, { useState } from "react";
// import { useGlobalContext } from "../Context/Context";
// import axios from "axios";
// import MetroCard from "../components/Dynamic/Merto_card/MetroCard";
// import { NavLink } from "react-router-dom";
// import Footer from "../components/Static/Footer/Footer";
// import Loader from "../components/Static/Loader/Loader";
// import TitleHeader from "../components/Static/Header/TitleHeader";

// const Lucknow = () => {
//   const { station, API_URL1 } = useGlobalContext();
//   const [stationOption, setStationOption] = useState({
//     From: "MNSP",
//     To: "MNSP",
//   });

//   const { From, To } = stationOption;
//   const [Fare, setFare] = useState([]);
//   const [StationBetween, setStationBetween] = useState([]);
//   const [show, SetShow] = useState(false);
//   const [isLoading, setIsLoading] = useState();

//   // All Stations Fares
//   const getFare = async () => {
//     setIsLoading(true);
//     const data = await axios.get(`${API_URL1}Fares/${From},${To}`);
//     console.log(data.data[0]);
//     setFare(data.data[0]);
//     setIsLoading(false);
//   };

//   const GetAllData = () => {
//     getFare();
//     Stations();
//     SetShow(true);
//   };

//   // Station Between to station
//   const Stations = async () => {
//     const AllStation = await axios.get(
//       `${API_URL1}Stations/StationsBetweenTwoPoints?startStation=${From}&endStation=${To}`
//     );
//     console.log(AllStation);
//     setStationBetween(AllStation.data.stationList);
//   };
//   return (
//     <>
//       <TitleHeader title="Lucknow" />
//       <div className="container">
//         {/* ---------------- Metro Station Select option ---------------------------------------------------*/}
//         <div className="row justify-content-center m-0 Rounded-Border-Box">
//           <div className="col-md-6 col-10 Fare-Cal">
//             <div>
//               <label>Form:</label>
//               <select
//                 onChange={(e) => {
//                   setStationOption((prev) => ({
//                     ...prev,
//                     From: e.target.value,
//                   }));
//                 }}
//               >
//                 {station.map((item, index) => {
//                   return (
//                     <option key={index} value={item?.station_Code}>
//                       {item?.station_Name}
//                     </option>
//                   );
//                 })}
//               </select>
//             </div>
//             <div>
//               <label>To:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//               <select
//                 onChange={(e) => {
//                   setStationOption((prev) => ({ ...prev, To: e.target.value }));
//                 }}
//               >
//                 {station.map((item, index) => {
//                   return (
//                     <option key={index} value={item?.station_Code}>
//                       {item?.station_Name}{" "}
//                     </option>
//                   );
//                 })}
//                 ;
//               </select>
//             </div>
//             <button
//               type="button"
//               className="btn btn-outline-danger float-end"
//               onClick={GetAllData}
//             >
//               Get Fare
//             </button>
//           </div>
//         </div>
//         <br />
//         {/*--------------------------------------------------------------------------------------------------- */}

//         {/* -------------------- Metro Stations Details ------------------------------------------------------*/}
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <div className="Rounded-Border">
//             <section className={show ? "details_show" : "details_hide"}>
//               <div className="container">
//                 <div className="row justify-content-center  pt-4 px-3 ">
//                   <div className="Fare-Cal">
//                     <div className="col-md-12 col-12 ">
//                       <div className="row">
//                         <div className="col-6 text-white text-center">
//                           <h6>Start Station</h6>
//                           <p className="m-0">
//                             <i className="bi bi-train-front"></i>&nbsp;
//                             {Fare?.start_Station}
//                           </p>
//                         </div>

//                         <div className="col-6 text-white text-center">
//                           <h6>End Station</h6>
//                           <p className="m-0">
//                             <i className="bi bi-train-front"></i>&nbsp;
//                             {Fare?.end_Station}
//                           </p>
//                         </div>
//                       </div>
//                       <hr />
//                       <div className="row">
//                         <div className="col-6 text-white text-center">
//                           <h6>Travel Time</h6>
//                           <p className="m-0">
//                             <i className="bi bi-alarm-fill"></i>&nbsp;
//                             {Fare?.duration}
//                           </p>
//                         </div>

//                         <div className="col-6 text-white text-center">
//                           <h6>Token Fare</h6>
//                           <p className="m-0">₹&nbsp;{Fare?.fare_Value}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row justify-content-center mt-4 px-3">
//                   <div className="Fare-Cal">
//                     <div className="col-12 col-md-12">
//                       <div className="text-center mt-2 px-5">
//                         <h3>Station Summary</h3>
//                         <hr />
//                       </div>
//                       <div className="row justify-content-center align-items-center p-2">
//                         <div className="col-md-2 col-2">
//                           <div className="d-flex justify-content-center">
//                             <i
//                               className="bi bi-train-front"
//                               style={{
//                                 background: "green",
//                                 padding: 5,
//                                 borderRadius: "100%",
//                               }}
//                             ></i>
//                           </div>
//                           {StationBetween.map((items, index) => {
//                             return (
//                               <div
//                                 key={index}
//                                 className="d-flex justify-content-center"
//                               >
//                                 <img
//                                   src="Images/railroad.png"
//                                   height="41px"
//                                   alt="track"
//                                   style={{ filter: "invert(1)" }}
//                                 />
//                               </div>
//                             );
//                           })}
//                           <div className="d-flex justify-content-center">
//                             <i
//                               className="bi bi-train-front"
//                               style={{
//                                 background: "red",
//                                 padding: 5,
//                                 borderRadius: "100%",
//                               }}
//                             ></i>
//                           </div>
//                         </div>
//                         <div className=" col-md-6 col-9">
//                           {StationBetween.map((items, index) => {
//                             return (
//                               <h6 className="p-2 text-white" key={index}>
//                                 <i className="bi bi-train-front"></i>
//                                 &nbsp;&nbsp;
//                                 <NavLink to={`/details/${items.station_Code}`}>
//                                   <span
//                                     onClick={() =>
//                                       console.log(items.station_Code)
//                                     }
//                                   >
//                                     {items.station_Name}
//                                   </span>
//                                 </NavLink>
//                               </h6>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//             {/* -------------------------------------------------------------------------------------------------- */}

//             <MetroCard />
//           </div>
//         )}
//         {/*----------------------------------------------------------------------------------------------------*/}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Lucknow;
