import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import TitleHeader from "../Header/TitleHeader";
import {_getThemeColor} from "../../../config/Config"

const About = () => {

  const [themColors, setThemColors] = useState(null)
  // get data from config
  useEffect(()=>{
   const themeClr = async ()=>{
    const themeColor = await _getThemeColor()
    setThemColors(themeColor)
   }
   themeClr()
  },[])
// end


  const Mail = () => {
    window.open("mailto:nowgray@gmail.com");
  };
  return (
    <>
      <TitleHeader title="About" />
      <div className="container">
        <div className="Rounded-Border">
          <div className="row justify-content-center">
            <div className="col-11 col-md-10 ">
              <br /> <br />
              <h6 className="text-center Fare-Cal" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>
                If you require any more information or have any questions about
                our "Lucknow Metro application” disclaimer, please feel free to
                contact us by email at&nbsp;
                <span className="" style={{ cursor: "pointer" }} onClick={Mail}>
                  <u>Nowgray@gmail.com</u>
                </span>
              </h6>{" "}
              <br />
              <div>
                <p>
                  <b>Near by Metro</b> is a web-based application that will help
                  you find the best way to get around the city of Lucknow. With
                  Near by Metro's powerful search engine and train routes, you
                  can quickly sort through different options to save time and
                  money on your commute. <b>Near by Metro</b> is a powerful app
                  that you can use to plan your journey in Lucknow. With{" "}
                  <b>Near by Metro</b>, you can search for suggested routes and
                  easily compare fees, travel times and transfer points. You'll
                  never be left hanging wondering if you're making the right
                  choices again! Never miss another train or bus!{" "}
                  <b>Near by Metro</b> for Lucknow helps you find the fastest,
                  most convenient route and the right transit lines that will
                  get you to your destination.
                </p>
              </div>
              <div>
                <h4>Features:</h4>
                <ul>
                  <li>Search for nearby metro stations</li>
                  <li>Detailed maps of each metro line</li>
                  <li>Find your best route in seconds</li>
                  <li>Live updates on metro travel times</li>
                  <li>Real time search of routes</li>
                  <li>Colored route maps for easy navigation</li>
                  <li>Plan multiple modes of transportation on one ticket</li>
                </ul>
              </div>
              <div>
                <h4>Benefits:</h4>
                <li>Save time and money while traveling in Lucknow</li>
                <li>Get around the city with ease</li>
                <li>Streamline your commute with reliable information</li>
                <li>Search for metro routes in Lucknow</li>
                <li>Easily compare fares, schedules and transfer points</li>
                <li>Suggested routes tailored to your convenience</li>
                <li>Bookmark favourite stations and routes</li>
                <li>
                  Save time by finding the fastest/cheapest transport option
                </li>
                <li>Find convenient options tailored to your needs</li>
                <li>
                  Make informed decisions on which transportation option to
                  choose
                </li>
                <li>
                  Quickly and easily determine the best transit routes to get
                  wherever you need to go in Lucknow.
                </li>
                <li>
                  Keep up with traffic delays so you can plan accordingly.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
