import React, { useState } from 'react'
import "./Form.css"
import { toast } from 'react-toastify';
import "./btns.css"
function Firstfeatures({ data, setData, setStep }) {
    const handleClick = () => {
        if (!data["clock_speed"] > 0 ||
            !data["battery_power"] > 0 ||
            !data["int_memory"] > 0 ||
            !data["mobile_wt"] > 0 ||
            !data["n_cores"] > 0 ||
            !data["pc"] > 0
        ) {
            return toast.error('All input are required')
        } else if (data["battery_power"] < 500 || data["battery_power"] > 2000) {
            return toast.error('Battery Power should be between 500 and 2000')
        } else if (data["clock_speed"] < 0.5 || data["clock_speed"] > 3) {
            return toast.error('Clock Speed should be between 0.5 and 3')
        } else if (data["int_memory"] < 2 || data["int_memory"] > 65) {
            return toast.error('Internal Memory should be between 2 and 65')
        } else if (data["mobile_wt"] < 80 || data["mobile_wt"] > 200) {
            return toast.error('Device Weight should be between 80 and 200')
        } else if (data["n_cores"] < 1 || data["n_cores"] > 8) {
            return toast.error('Number of Processors should be between 1 and 8')
        } else if (data["pc"] < 1 || data["pc"] > 20) {
            return toast.error('Quality of Primary Camera should be between 0 and 20')
        }
        setStep(1);
    }

    return (
        <>
            <div className="form-floating mb-3">
                <input type="number"
                    className='form-control'
                    min={0}
                    value={data["battery_power"]}
                    name='battery_power'
                    onChange={(e) => {
                        setData({ ...data, battery_power: e.target.value.trim() !== "" ? +e.target.value  : "" });
                    }}
                    id="battery_power" placeholder='' />
                <label htmlFor="battery_power">Battery Power</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control"
                    value={data["clock_speed"]}
                    name='clock_speed'
                    onChange={(e) => {
                        setData({ ...data, clock_speed: e.target.value.trim() !== "" ? +e.target.value  : ""});

                    }}
                    id="clock_speed" placeholder='' min={0.5} max={3} />
                <label htmlFor="clock_speed">Clock Speed</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" min={0}
                    value={data["int_memory"]}
                    name='int_memory'
                    onChange={(e) => {
                        setData({ ...data, int_memory:  e.target.value.trim() !== "" ? +e.target.value  : "" });

                    }}
                    className="form-control" id="int_memory" placeholder='' />
                <label htmlFor="int_memory">Internal memory in GigaByte</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number"
                    value={data["mobile_wt"]}
                    name='mobile_wt'
                    onChange={(e) => {
                        setData({ ...data, mobile_wt:  e.target.value.trim() !== "" ? +e.target.value  : "" });

                    }}
                    className="form-control" id="mobile_wt" placeholder='' min={80} max={200} />
                <label htmlFor="mobile_wt">Device Weight</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" min={0}
                    value={data["n_cores"]}
                    name='n_cores'
                    onChange={(e) => {
                        setData({ ...data, n_cores: e.target.value.trim() !== "" ? +e.target.value  : ""});

                    }}
                    className="form-control" id="n_cores" placeholder='' />
                <label htmlFor="n_cores">Number of processor cores</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" min={0}
                    value={data["pc"]}
                    name='pc'
                    onChange={(e) => {
                        setData({ ...data, pc:  e.target.value.trim() !== "" ? +e.target.value  : "" });
                    }}
                    className="form-control" id="pc" placeholder='' />
                <label htmlFor="pc">Quality of primary camera in MegePixel</label>
            </div>

            <button
                onClick={handleClick}
                className="btn btn-outline-primary next"
                type="button"
            >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right next" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </button>

        </>

    )
}

export default Firstfeatures