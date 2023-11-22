import React from "react";
import "../../../App.css";
import { useNavigate } from "react-router";

const BackBtn = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button type="button" className="share_Btn" onClick={goBack}>
        <i className="bi bi-arrow-return-left"></i>
      </button>
    </>
  );
};

export default BackBtn;
