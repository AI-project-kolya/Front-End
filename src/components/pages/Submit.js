import React, { useState } from 'react'
import "./Form.css"
import { toast } from 'react-toastify';
function Submit({ data, setData, setBack, setPrediction, prediction }) {
    const [loading, setLoading] = useState(0);
    const handleClick = async (e) => {
        setLoading(true)
        try {
            e.preventDefault();
            const myHeaders = new Headers();
            myHeaders.append('Accept', 'application/json');
            myHeaders.append('Content-Type', 'application/json');
            const response = await fetch("https://mragaey.com/marwa/api/predict_price_range", {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(data)
            });
            const responseText = await response.json();
            if (!response.ok) {
                throw new Error(responseText);
            }
            setPrediction(responseText.price_range);
        } catch (error) {
            toast.error(`${error.message}`);
            console.log(error,error.message)
        }
        finally {
            setLoading(false)
        }
    }
    const handleBack = () => {
        setBack(2)
    }
    return (
        <>
            <div className="form-switch  mb-3">
                <input className="form-check-input" type="checkbox"
                    checked={data["blue"]}
                    name='blue'
                    onChange={(e) => {
                        setData(data => {
                            return { ...data, blue: !data["blue"] }
                        });
                    }}
                    role="switch" id="blue" />
                <label className="form-check-label" htmlFor="blue">Bluetooth</label>
            </div>
            <div className="form-switch  mb-3">
                <input className="form-check-input" type="checkbox"
                    checked={data["four_g"]}
                    name='four_g'
                    onChange={(e) => {
                        setData(data => {
                            return { ...data, four_g: !data["four_g"] }
                        });
                    }}
                    role="switch" id="four_g" />
                <label className="form-check-label" htmlFor="four_g">4G</label>
            </div>

            <div className="form-switch  mb-3">
                <input className="form-check-input"
                    checked={data["three_g"]}
                    name='three_g'
                    onChange={(e) => {
                        setData(data => {
                            return { ...data, three_g: !data["three_g"] }
                        });
                    }}
                    type="checkbox" role="switch" id="three_g" />
                <label className="form-check-label" htmlFor="three_g">3G</label>
            </div>
            <div className="form-switch  mb-3">
                <input className="form-check-input"
                    checked={data["touch_screen"]}
                    name='touch_screen'
                    onChange={(e) => {
                        setData(data => {
                            return { ...data, touch_screen: !data["touch_screen"] }
                        });
                    }}
                    type="checkbox" role="switch" id="touch_screen" />
                <label className="form-check-label" htmlFor="touch_screen">Touch Screen</label>
            </div>
            <div className="form-switch  mb-3">
                <input className="form-check-input"
                    checked={data["wifi"]}
                    name='wifi'
                    onChange={(e) => {
                        setData(data => {
                            return { ...data, wifi: !data["wifi"] }
                        });
                    }}
                    type="checkbox" role="switch" id="wifi" />
                <label className="form-check-label" htmlFor="wifi">WIFI</label>
            </div>
            <div className="form-switch  mb-3">
                <input className="form-check-input"
                    checked={data["dual_sim"]}
                    name='dual_sim'
                    onChange={(e) => {
                        setData(data => {
                            return { ...data, dual_sim: !data["dual_sim"] }
                        });
                    }}
                    type="checkbox" role="switch" id="dual_sim" />
                <label className="form-check-label" htmlFor="dual_sim">Dual SIM</label>
            </div>
            <button
                onClick={handleBack}
                className="btn btn-outline-primary"
                type="button"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left back" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
                Back
            </button>
            <button className="btn btn-primary" type="button" disabled={loading} onClick={handleClick}>
                {loading ?
                    <>
                        <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Loading...</span>
                    </>
                    : "Submit"
                }
            </button>

        </>
    )
}

export default Submit