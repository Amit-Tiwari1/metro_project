import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "../../../App.css";

const MetroMap = () => {
  return (
    <>
      <div className="content">
        <div className="row mt-2 justify-content-center">
          <TransformWrapper
            initialScale={1}
            initialPositionX={0}
            initialPositionY={0}
          >
            {({ zoomIn, zoomOut }) => (
              <>
                <div className="col-md-8 mt-5 col-12">
                  <h4 className="fw-bolder">&nbsp; &nbsp; &nbsp; Metro Map</h4>
                  <TransformComponent contentStyle={{ background: "#fff" }}>
                    <img
                      src="Images/Metro_Map.png"
                      alt="test"
                      className="img-fluid"
                    />
                  </TransformComponent>
                </div>

                <div className="tools mb-2">
                  <button className="zoom" onClick={() => zoomOut()}>
                    <b>-</b>
                  </button>
                  <button className="zoom" onClick={() => zoomIn()}>
                    <b>+</b>
                  </button>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </>
  );
};

export default MetroMap;
