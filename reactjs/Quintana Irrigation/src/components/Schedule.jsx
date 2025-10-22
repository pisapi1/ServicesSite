import React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { useState } from "react";
import { IMaskInput } from 'react-imask';


const Schedule = () => {
    const today = dayjs();
    // State to manage the selected date
    const [date, setDate] = useState(dayjs()); // default value of current date via dayjs

    // State for phone number
    const [phoneNumber, setPhoneNumber] = useState('');
    // Handler for date change
    const handleDateChange = (newValue) => {
        setDate(newValue);
    }
    //console.log("Selected date:", today.hour());
    return (
        <div>
            <center>
                <h1>Schedule Page</h1>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <form>
                        <label>Schedule a Consultation</label>
                        <br></br>
                        <DatePicker
                            label="Select Date"
                            sx={{ margin: 1 }}
                            // minimum date is today
                            minDate={today}
                            value={date}
                            onChange={handleDateChange}
                            
                        />
                        <br />
                        <TimePicker
                            label="Select Time"
                            views={["hours"]}
                            // minimum time is the next hour from now, invalid for current hour
                            minTime={today}

                        />
                        <br />
                        <br />
                        <label>Contact Information</label>
                        <br />
                        <IMaskInput
                            mask="(000) 000-0000"
                            value={phoneNumber}
                            onAccept={(value) => setPhoneNumber(value)}
                            placeholder="(123) 456-7890"

                        /> 
                        <br />
                        <label>Email Address</label>
                        <br />
                        <input label="Email" type="email" placeholder="Enter email"/>
                        <br />
                        <br />
                        <input type="submit" value="Submit"/>
                    </form>
                </LocalizationProvider>
            </center>
        </div>
    );
};

export default Schedule;