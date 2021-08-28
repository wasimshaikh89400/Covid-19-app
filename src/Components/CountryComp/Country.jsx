import React from 'react';
import './Coutry.css'
const Country = ({ stateData }) => {
    console.log(stateData);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 box box1">
                        <div>
                            <h2>INDIA</h2>
                        </div>
                    </div>
                    <div className="col-md-3 box box2">
                        <div>
                            <div>Confirmed</div>
                            <div>{stateData.confirmed}</div>
                        </div>
                    </div>
                    <div className="col-md-3 box box3">
                        <div>
                            <div>Active</div>
                            <div>{stateData.active}</div>
                        </div>
                    </div>
                    <div className="col-md-3 box box4">
                        <div>
                            <div>Recovered</div>
                            <div>{stateData.recovered}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 box box5">
                        <div>
                            <div>Deaths</div>
                            <div>{stateData.deaths}</div>
                        </div>
                    </div>
                    <div className="col-md-3 box box6">
                        <div>
                            <div>Delta Confirmed</div>
                            <div>{stateData.deltaconfirmed}</div>
                        </div>
                    </div>
                    <div className="col-md-3 box box7">
                        <div>
                            <div>Delta Recovered</div>
                            <div>{stateData.deltarecovered}</div>
                        </div>
                    </div>
                    <div className="col-md-3 box box8">
                        <div>
                            <div>Delta Deaths</div>
                            <div>{stateData.deltadeaths}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;