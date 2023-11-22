import React, { useState } from "react";
import "../../../App.css";
import SocialMedia from "../../Dynamic/social-media/SocialMedia";

const Header = () => {
  const [showLoader, setShowLoader] = useState(true);

  const explore = () => {
    const timer = setTimeout(() => {
      window.open("https://metro.circularjourney.com/", "_blank");
      setShowLoader(false);
    }, 5000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <header
        className="w-100 position-sticky top-0 px-2 mb-4 theme_Color"
        style={{ zIndex: 100 }}
      >
        {/* Header */}
        <div className=" d-flex justify-content-between align-items-center">
          <div className="logo p-3">
            <img src="Images/logo.png" height="50px" alt="Metro_Logo" />
          </div>
          <div>
            <button onClick={explore} className="button-3d">
              Explore
            </button>
            <button
              type="button"
              className="share_Btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i className="bi bi-share-fill"></i>
            </button>
          </div>
        </div>
        {/* ================================================= */}

        {/* Social Media Button Content */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
        {/* ================================== */}
      </header>
    </>
  );
};

export default Header;
