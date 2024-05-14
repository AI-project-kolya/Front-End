import React from 'react'
// import "./Form.css"
import "./btns.css"
import { toast } from 'react-toastify'
function SecondFeatures({ data, setData, setNext ,setBack }) {
    const handleClick = () => {
        if (!data["px_height"] > 0 ||
            !data["px_width"] > 0 ||
            !data["ram"] > 0 ||
            !data["sc_h"] > 0 ||
            !data["sc_w"] > 0
        ) { return toast.error('All input are required') }
        else if (data["px_height"] < 0 || data["px_height"] > 1960) {
            return toast.error('Height Resoluation should be between 0 and 1960')
        } else if (data["px_width"] < 500 || data["px_width"] > 2000) {
            return toast.error('Width Resoluation should be between 500 and 2000')
        } else if (data["ram"] < 256 || data["ram"] > 4000) {
            return toast.error('Random Access Memory should be between 256 and 4000')
        } else if (data["sc_h"] < 5 || data["sc_h"] > 20) {
            return toast.error('Height Screen should be between 5 and 20')
        } else if (data["sc_w"] < 0 || data["sc_w"] > 19) {
            return toast.error('Width Screen should be between 1 and 8')
        }
        setNext(2);
    }
    const handleBack = () => {
        setBack(1)
    }
    return (
        <>
            <div className="form-floating mb-3">
                <input type="number" className="form-control"
                    value={data["px_height"]}
                    name='px_height'
                    onChange={(e) => {
                        setData({ ...data, px_height:  e.target.value.trim() !== "" ? +e.target.value  : "" });
                        console.log(e.target.value);
                    }}
                    id="px_height" placeholder='' min={0} max={1960} />
                <label htmlFor="px_height">Height of pixel resolution</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control"
                    value={data["px_width"]}
                    name='px_width'
                    onChange={(e) => {
                        setData({ ...data, px_width:  e.target.value.trim() !== "" ? +e.target.value  : "" });
                        console.log(e.target.value);
                    }}
                    id="px_width" placeholder='' min={500} max={2000} />
                <label htmlFor="px_width">Width of pixel resolution</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control"
                    value={data["ram"]}
                    name='ram'
                    onChange={(e) => {
                        setData({ ...data, ram:  e.target.value.trim() !== "" ? +e.target.value  : "" });
                        console.log(e.target.value);
                    }}
                    id="ram" placeholder='' min={256} max={4000} />
                <label htmlFor="ram">Random access memory in MegaByte</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control"
                    value={data["sc_h"]}
                    name='sc_h'
                    onChange={(e) => {
                        setData({ ...data, sc_h:  e.target.value.trim() !== "" ? +e.target.value  : ""});
                        console.log(e.target.value);
                    }}
                    id="sc_h" placeholder='' min={5} max={20} />
                <label htmlFor="sc_h">Height of device screen in CM</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control"
                    value={data["sc_w"]}
                    name='sc_w'
                    onChange={(e) => {
                        setData({ ...data, sc_w:  e.target.value.trim() !== "" ? +e.target.value  : "" });
                        console.log(e.target.value);
                    }}
                    id="sc_w" placeholder='' min={0} max={19} />
                <label htmlFor="sc_w">Width of device screen in CM</label>
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
            <button
                onClick={handleClick}
                className="btn btn-outline-primary"
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

export default SecondFeatures