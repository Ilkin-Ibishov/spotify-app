import React, { FC, ReactElement } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const SelectPlaylist: FC = (): ReactElement => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
    return (
      <Box sx={{display: "flex", alignItems: "center", gap: "5%"}}>
        <FormControl sx={{width: "30%"}}>
        <InputLabel id="demo-simple-select-label">Select playlist</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <span>Playlist description</span>
      </Box>
    );
  };
  
  export default SelectPlaylist;