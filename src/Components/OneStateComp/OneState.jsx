import React, { useState } from 'react';
import Swal from 'sweetalert2'
import './OneState.css'

const OneState = ({ stateData }) => {
    const [selectState, setSelectState] = useState({
        name: stateData[1].state,
        active: stateData[1].active,
        death: stateData[1].deaths,
        confirmed: stateData[1].confirmed,
        recovered: stateData[1].recovered,
        deltaConfirm: stateData[1].deltaconfirmed,
        deltarecovered: stateData[1].deltarecovered,
        deltaDeaths: stateData[1].deltadeaths,


    })
    var userCheck = localStorage.getItem('userData')
    const changeData = (e) => {
        console.log(e);
        for (let item of stateData) {
            if (item.state === e.target.value) {
                console.log(item.state);
                setSelectState({
                    name: item.state,
                    active: item.active,
                    death: item.deaths,
                    confirmed: item.confirmed,
                    recovered: item.recovered,
                    deltaConfirm: item.deltaconfirmed,
                    deltarecovered: item.deltarecovered,
                    deltaDeaths: item.deltadeaths
                })
            }
        }
    }
    const checkUserData = () => {
        if (!userCheck) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please first fill your vaccination details!',
            })
        }
    }
    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* add selectbox for select state */}
            <div className="selectBox">
                <select style={{ marginBottom: '40px' }} className="stateList" onChange={(e) => changeData(e)} onClick={checkUserData}>
                    {stateData.map((ele, index) => {
                        if (ele.state !== 'Total') return <option key={index} style={{ background: 'transparent', height: '35px' }} value={ele.state}>{ele.state}</option>
                    })}
                </select>
            </div>
            {/* end select box */}

            {/* display selected state data */}

            {/* end display selected data section */}

            <table className="table" style={{ color: 'white' }}>
                <tr>
                    <td>State</td>
                    <td>{selectState.name}</td>
                </tr>
                <tr>
                    <td>Active</td>
                    <td>{selectState.active}</td>
                </tr>
                <tr>
                    <td>Confirmed</td>
                    <td>{selectState.confirmed}</td>
                </tr>
                <tr>
                    <td>recovered</td>
                    <td>{selectState.recovered}</td>
                </tr>
                <tr>
                    <td>Deaths</td>
                    <td>{selectState.death}</td>
                </tr>
                <tr>
                    <td>Active</td>
                    <td>{selectState.active}</td>
                </tr>
                <tr>
                    <td>Delta Confirm</td>
                    <td>{selectState.deltaConfirm}</td>
                </tr>
                <tr>
                    <td>Delta recovered</td>
                    <td>{selectState.deltarecovered}</td>
                </tr>
                <tr>
                    <td>Delta Deaths</td>
                    <td>{selectState.deltaDeaths}</td>
                </tr>
            </table>
            <div className="warning">
                <div>
                    {selectState.deltaConfirm > 100 &&
                        <div >
                            100+ Delta patient found in {selectState.name}, if you are belongs to the {selectState.name} so be secure and maintain social distancing.
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default OneState;