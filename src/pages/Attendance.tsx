import {InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material';
import React, {useState} from 'react';

function Attendance() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };



  return (
    <>
      <InputLabel>Age</InputLabel>
      <br/>
      <Select
        value={age}
        label="Age"
        defaultValue={age}
        onChange={handleChange}
      >
        <MenuItem value={"10"}>Ten</MenuItem>
        <MenuItem value={"20"}>Twenty</MenuItem>
        <MenuItem value={"30"}>Thirty</MenuItem>
      </Select>

      <DesktopDatePicker
        label="Date desktop"
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />

    </>
  );
}

export default Attendance;