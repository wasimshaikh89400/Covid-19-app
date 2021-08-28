import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import './UserData.css'
import Modal from 'react-modal';
import Swal from 'sweetalert2'


const UserData = () => {
    const [submit, setSubmit] = useState()
    const [vaccine, setVaccine] = useState()
    const [message, setMessage] = useState('Hey Champion! Still you have not added your COVID-19 information. Please click on + icon for fill details')
    const [name, setName] = useState()
    const [fullyVaccinate, setFullyVaccinate] = useState()
    const [add, setAdd] = useState(true)
    const [isModelOpen, setIsModelOpen] = useState(false)

    useEffect(() => {
        var userName = localStorage.getItem('name')
        var isVaccinate = localStorage.getItem('vaccine') === 'true'
        var isFullVaccinate = localStorage.getItem('full') === 'true'

        if (userName !== null) {
            setAdd(false)
            setName(userName)
            console.log(name);
            setMessage(`Hey! ${userName} as we are see ${isVaccinate ? `you are  ${isFullVaccinate ? 'fully vaccinated , But still be careful !' : 'vaccinated but not fully vaccinate so please get full vaccine on your schedule date !'}` : `you haven't vaccinated yet please visit your nearest vaccine center !`}`)
        }
    }, [])

    const checkValue = (e) => {
        if (e.target.value === 'yes') {
            setVaccine(true)
        }
        else {
            setVaccine(false)
        }
    }

    const checkVa = (e) => {
        if (e.target.value === 'full') {
            setFullyVaccinate(true)
        }
        else {
            setFullyVaccinate(false)
        }
    }

    const submitData = () => {
        console.log(vaccine);
        if (name === '') {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please Enter your name!',
            })
        }
        else if (vaccine === undefined) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please fill your vaccination details!',
            })
        }
        else if (fullyVaccinate === undefined && vaccine) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Please fill your vaccination details!',
            })
        }
        else {
            window.location.reload()
            setSubmit(false)
            localStorage.setItem('userData', true)
            localStorage.setItem('name', name)
            localStorage.setItem('vaccine', vaccine)
            localStorage.setItem('full', fullyVaccinate)
        }
    }
    return (
        <div>
            {!submit &&
                <div className="userMessage">
                    <span>{message}</span>
                    <span className="addIcon" onClick={() => setSubmit(true)} variant="contained" color="primary" style={{ marginLeft: '30px' }}>
                        {add ? <AddIcon /> : <EditIcon />}
                    </span>
                </div>

            }
            <Modal isOpen={submit}>
                <div className="userData">
                    <div>
                        <h2 style={{ marginBlock: '30px', color: 'gray' }}>Vaccine Information</h2>
                    </div>
                    <table>
                        <tr>
                            <td>
                                Enter your name
                            </td>
                            <td>
                                <input type="text" value={name} placeholder="Please enter your name" onChange={(e) => setName(e.target.value)} />

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span style={{ paddingTop: '40px' }}>Are you vaccinated</span>
                            </td>
                            <td>
                                <FormControl component="fieldset">
                                    <RadioGroup style={{ display: 'inline' }} aria-label="gender" name="gender1" onChange={checkValue}>
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </td>
                        </tr>


                        {

                            vaccine &&
                            <tr>
                                <td>You have full vaccinated or half</td>
                                <td>
                                    <FormControl component="fieldset">
                                        <RadioGroup style={{ display: 'inline' }} aria-label="gender" name="gender1" onChange={checkVa}>
                                            <FormControlLabel value="full" control={<Radio />} label="Full" />
                                            <FormControlLabel value="half" control={<Radio />} label="Half" />
                                        </RadioGroup>
                                    </FormControl>
                                </td>
                            </tr>
                        }


                        <tr>
                            <td style={{ paddingLeft: '20%' }}>
                                <Button variant="contained" onClick={() => setSubmit(false)} color="secondary">Cancel</Button>
                            </td>
                            <td style={{ paddingLeft: '20%' }}>
                                <Button variant="contained" onClick={() => submitData()} color="primary">Submit</Button>
                            </td>


                        </tr>
                    </table>
                </div>
            </Modal>
        </div>
    );
};

export default UserData;