import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { _getThemeColor } from "../../../config/Config";
const MetroCard = () => {
  const MetroCardDetails = () => {
    window.open("https://lmrcl.com/passengerinfo/go-smart-card/");
  };

  const [themColors, setThemColors] = useState(null)
  // get data from config
  useEffect(()=>{
   const themeClr = async ()=>{
    const themeColor = await _getThemeColor()
    setThemColors(themeColor)
   }
   themeClr()
  },[])

  const { id } = useParams();
  const getImageSource = () => {
    switch (id) {
      case '3':
        return '/Images/jaipur_card.jpg';
        case '8':
        return '/Images/kochi_card.jpg';
      case '4':
        return '/Images/mumbai_metro.jpg';
      case '10':
        return '/Images/metro_card.jpg';
      default:
        return null;
    }
  };

  const imageSource = getImageSource();
  // console.log("mtrId", id);
  return (
    <>
      {/* ------------------------------ Metro Card Details --------------------------------------*/}
      <div className="metro_card mb-2">
        <span>
        {imageSource ? (
            <img src={imageSource} alt="MetroCard" width="250px" />
          ) : (
            <div>No image available for this MetroCard type.</div>
          )}

        </span >       
         <span>
          <button onClick={() => MetroCardDetails()} style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #2d2d47)` }}>Learn More</button>
        </span>
      </div>

      {/* ------------------------------------------------------------------------------------------*/}
    </>
  );
};

export default MetroCard;
