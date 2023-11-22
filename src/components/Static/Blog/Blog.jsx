import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../Footer/Footer";
import TitleHeader from "../Header/TitleHeader";
import {_getThemeColor} from "../../../config/Config";

const Blog = () => {

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

  const CircularJourney = () => {
    window.open("https://www.circularjourney.com");
  };
  const RedFort = () => {
    window.open("https://www.circularjourney.com/red-fort-the-heart-of-delhi");
  };
  const Foods = () => {
    window.open("https://www.circularjourney.com/category/food/");
  };
  const Traveling = () => {
    window.open("https://www.circularjourney.com/category/traveling");
  };
  const Business_Blog = () => {
    window.open("https://nowgray.com/blog.html");
  };
  const funny_video = () => {
    window.open("https://www.youtube.com/results?search_query=mjo");
  };
  const Tranding = () => {
    window.open("https://www.youtube.com/feed/trending?bp=6gQJRkVleHBsb3Jl");
  };
  return (
    <>
      <TitleHeader title="Lost & Found" />
      <div className="container">
        <div className="Rounded-Border">
          <div className="row justify-content-center py-4 px-2">
            <div className="col-md-8 col-12">
              <div className="mx-2 Fare-Cal" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }} >
                <div className="row justify-content-around align-items-center text-center mt-3 ">
                  <div className="col-8">
                    <h5>Love Reading ?</h5>
                  </div>
                  <div className="col-4" style={{ fontSize: "4rem" }}>
                    <i className="bi bi-postcard-heart"></i>
                  </div>
                </div>{" "}
                <br />
                <div className="row justify-content-around align-items-center text-center mb-3">
                  <div className="col-5">
                    <button className="Fare-Cal" style={{color:"black"}} onClick={Business_Blog}>
                      Business Blog
                    </button>
                  </div>
                  <div className="col-5">
                    <button className="Fare-Cal " style={{color:"black"}}  onClick={Traveling}>
                      Travel Blog
                    </button>
                  </div>
                </div>
              </div>
              <br />

              <div className="mx-2 Fare-Cal" style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }}>
                <div className="row justify-content-around align-items-center text-center mt-3 ">
                  <div className="col-8">
                    <h5>Love Watching ?</h5>
                  </div>
                  <div className="col-4" style={{ fontSize: "4rem" }}>
                    <i className="bi bi-postcard-heart"></i>
                  </div>
                </div>{" "}
                <br />
                <div className="row justify-content-around align-items-center  text-center mb-3">
                  <div className="col-5">
                    <button className="Fare-Cal " style={{color:"black"}}  onClick={funny_video}>
                      Funny videos
                    </button>
                  </div>
                  <div className="col-5">
                    <button className="Fare-Cal" style={{color:"black"}}  onClick={Tranding}>
                      Trending
                    </button>
                  </div>
                </div>
              </div>
              <br />

              <div
                className="mx-2 Fare-Cal pt-3"
                style={{ marginBottom: "5rem" }}
              >
                <div className="row justify-content-around align-items-center mt-3 ">
                  <div className="col-12"  style={{ background: `linear-gradient(to right, ${themColors ? themColors : 'initial'}, #7474BF)` }} >
                    <h6>
                      Popular Blog by{" "}
                      <span onClick={CircularJourney} style={{color:"white"}} className="color_Blue">
                        Circular Journey
                      </span>
                    </h6>
                    <hr />
                    <ol className="px-3 mt-2">
                      <li>
                        <span onClick={RedFort} style={{ cursor: "pointer" }}>
                          Red fort the heart of Delhi
                        </span>
                      </li>
                      <li>
                        <span onClick={Foods} style={{ cursor: "pointer" }}>
                          Delicious Foods
                        </span>
                      </li>
                      <li>
                        <span onClick={Traveling} style={{ cursor: "pointer" }}>
                          Traveling
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>{" "}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
