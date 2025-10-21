import React from "react";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { useState } from "react";


const Schedule = () => {
    const today = dayjs();
    // State to manage the selected date
    const [date, setDate] = useState(dayjs()); // default value of current date via dayjs
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
                        <input label="Email" type="email" placeholder="Enter email"/>
                        <br />
                        <input label="Number" type="tel" placeholder="Enter number"/>
                        <br />
                        <input type="submit" value="Submit"/>
                    </form>
                </LocalizationProvider>
            </center>
        </div>
    );
};

export default Schedule;