import React from 'react';

const TwoRoute = () => {
    return (
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
                <div key={index} className="d-flex justify-content-center">
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
                  <NavLink to={`/details/${items.station_Code}`}>
                    <span onClick={() => console.log(items.station_Code)}>
                      {items.station_Name}
                    </span>
                  </NavLink>
                </h6>
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default TwoRoute;