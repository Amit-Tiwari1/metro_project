 
// get data from localstorage 
// ----theme---
export const _getThemeColor = async () =>{
    const themeColor = localStorage.getItem("Station_Name")
    if(themeColor){
      const actColor = JSON.parse(themeColor).theme;
      return actColor
    }
  }
//   end --- 

export const API_URL1 = "https://lucknow-metro.circularjourney.com/api/";
export const API_URL =
  "http://test-api2-nearbymetro-com.secure52.ezhostingserver.com/api/";

  export const Localsrouteapi ="http://localhost:56899/api/Station/GetRouteId?startStation="
    // "http://localhost:56899/api/Station/GetRouteId?startStation=Old%20High%20Court&metroId=13";

    export const Localerouteapi = "http://localhost:56899/api/Station/V2_GetEndRoute_Id?endStation=";
      // "http://localhost:56899/api/Station/V2_GetEndRoute_Id?endStation=Old%20High%20Court&metroId=13";