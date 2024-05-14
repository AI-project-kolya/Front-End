import React, { useState } from "react";
import "./Form.css";
import Firstfeatures from "./Firstfeatures";
import SecondFeatures from "./SecondFeatures";
import Submit from "./Submit";
import Prediction from "./Prediction";
import initDataState from '../data';
function Form() {
  const [step, setStep] = useState(0);
  const [prediction, setPrediction] = useState('');
  const [data, setData] = useState(initDataState);
  return (
    <form>
      <h2>Cell Phone Price</h2>
      {step === 0 && (
        <Firstfeatures
          data={data}
          setData={(data) => setData(data)}
          setStep={() => setStep(1)}
        />
      )}
      {step === 1 && (
        <SecondFeatures
          data={data}
          setData={(data) => setData(data)}
          setNext={() => setStep(2)}
          setBack={() => setStep(0)}
        />
      )}
      {step === 2 && prediction.length===0 && (
        <Submit
          data={data}
          setData={(data) => setData(data)}
          setNext={() => setStep(3)}
          setBack={() => setStep(1)}
          setPrediction={setPrediction}
        />
      )}
      {prediction.length>0 && <Prediction prediction={prediction} setStep={setStep} setData={setData} setPrediction={setPrediction}/>}
    </form>
  );
}
export default Form;