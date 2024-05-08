import React, { FC, ReactElement } from "react";
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography, Box, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searchtrack: FC = (): ReactElement => {
    const searchResults:[] = []
    return (<>
      <Box sx={{ display: "flex", gap: "20px", width: "100%" }}>
        <TextField id="outlined-basic" 
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }} 
              variant="outlined" sx={{ width: "40%"}} />
        <Button variant="contained">Search</Button>
      </Box>
      {searchResults.map((item:any, index) => (
          <Paper key={index} elevation={3} sx={{ padding: 2, margin: 2, display:'flex', justifyContent:"space-between" }}>
                <Box><img width="40px" height="40px" src={item.album.images[0].url} alt="" /></Box>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Box sx={{cursor:'pointer'}}>Add</Box>
          </Paper>
        ))}
      </>
    );
  };
  
  export default Searchtrack;