 
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