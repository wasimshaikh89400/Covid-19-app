import React from 'react';
import './AllState.css'
import Swal from 'sweetalert2'

const AllState = ({ stateData }) => {

    const userData = localStorage.getItem('userData')
    const showMessage = () => {
        if (!localStorage.getItem('name')) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please first fill your vaccination details!',
            });
        }
    }
    return (
        <div className="scroll">
            <table className={`${!userData ? 'tableData' : 'sec'} table`} onClick={showMessage}>
                <thead>
                    <tr>
                        <th>#NO</th>
                        <th>STATE NAME</th>
                        <th>CONFIRM CASE</th>
                        <th>ACTIVE</th>
                        <th>DEATHS</th>
                    </tr>
                </thead>
                {
                    stateData.map((ele, index) => {
                        if (ele.state !== 'Total') return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ele.state}</td>
                            <td>{ele.confirmed}</td>
                            <td> {ele.active}</td>
                            <td>{ele.deaths}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
};

export default AllState;