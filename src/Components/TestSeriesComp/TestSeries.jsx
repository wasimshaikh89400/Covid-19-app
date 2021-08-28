import React, { useState } from 'react';
import './TestSeries.css'
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


const TestSeries = ({ stateData }) => {

    const [testData, setTestData] = useState({
        dailyconfirmed: stateData[0].dailyconfirmed,
        dailydeceased: stateData[0].dailydeceased,
        dailyrecovered: stateData[0].dailyrecovered,
        date: stateData[0].date,
        totalconfirmed: stateData[0].totalconfirmed,
        totaldeceased: stateData[0].totaldeceased,
        totalrecovered: stateData[0].totalrecovered

    })
    const [selectedDate, setSelectedDate] = React.useState(new Date('2020-06-21'));
    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }
    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(convert(date))
        for (let item in stateData) {
            if (convert(date) == stateData[item].dateymd) {
                setTestData({
                    dailyconfirmed: stateData[item].dailyconfirmed,
                    dailydeceased: stateData[item].dailydeceased,
                    dailyrecovered: stateData[item].dailyrecovered,
                    date: stateData[item].date,
                    totalconfirmed: stateData[item].totalconfirmed,
                    totaldeceased: stateData[item].totaldeceased,
                    totalrecovered: stateData[item].totalrecovered
                })
            }
        }
    };
    const selectDate = (e) => {
        console.log(e.target.value);

        console.log(testData);
    }
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        style={{ background: 'rgba(0,0,0,0.1)' }}
                    /></Grid>
            </MuiPickersUtilsProvider>
            <div className="testTable">
                <table>
                    <tr>
                        <tr>
                            <td>
                                Date
                            </td>
                            <td>
                                {testData.date}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Daily Confirmed
                            </td>
                            <td>

                                {testData.dailyconfirmed}
                            </td>
                        </tr>
                        <tr>
                            <td>Daily Deceased</td>
                            <td>
                                {testData.dailydeceased}
                            </td>
                        </tr>
                        <tr>
                            <td>Daily Recovered</td>
                            <td>
                                {testData.dailyrecovered}
                            </td>
                        </tr>
                        <tr>
                            <td>Total Confirmed</td>
                            <td>
                                {testData.totalconfirmed}
                            </td>
                        </tr>
                        <tr>
                            <td>Total Active</td>
                            <td>
                                {testData.totaldeceased}
                            </td>
                        </tr>
                        <tr>
                            <td>Total Recovered</td>
                            <td>
                                {testData.totalrecovered}
                            </td>
                        </tr>

                    </tr>
                </table>
            </div>
        </div>
    );
};

export default TestSeries;

