import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "./containers/auth/selectors";
import Box from '@mui/material/Box';
import Searchtrack from "./components/SearchTrack";
import AddNewPlaylist from "./components/AddNewPlaylist";
import SelectPlaylist from "./components/SelectPlaylist";
import TracksTable from "./components/TracksTable";

const App: FC = (): ReactElement => {
  const user = useSelector(authSelectors.getUser);
  return (
    <Box  sx={{ p: "5%", height: "100%", display: "flex", gap: "40px", flexDirection: "column" }}>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", pb: "5%"}}>
        <Searchtrack />
        <AddNewPlaylist />
      </Box>
      <SelectPlaylist />
      <TracksTable />
    </Box>
  );
};

export default App;
