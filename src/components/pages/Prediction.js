import React from 'react'
import mobileImage from "../../images/mobile.jpg"
import icon from "../../images/icon.png"
import initDataState from '../data';

function Prediction({ prediction, setStep, setData ,setPrediction}) {
  function handleClick(e) {
    e.preventDefault();
    setStep(0);
    setPrediction("");
    setData(initDataState)
  }
  return (
    <>
      <div className="card text-center p-2 pt-4">
        <img src={mobileImage} className="card-img-top " alt="..." style={{ maxWidth: "400px", margin: "auto" }} />
        <div className="card-body">
          <h5 className="card-title">Prediction Successful
            <img src={icon} style={{ width: '25px' }} />
          </h5>
          <p className="card-text">{prediction}</p>
        </div>
        <div className="card-body">
          <button onClick={handleClick} className="btn btn-primary">Predict Again</button>
        </div>
      </div>
    </>
  )
}

export default Prediction