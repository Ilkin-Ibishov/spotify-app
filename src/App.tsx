import React, { FC, ReactElement, useState, useEffect, useMemo } from "react";
import Box from '@mui/material/Box';
import Searchtrack from "./components/SearchTrack";
import AddNewPlaylist from "./components/AddNewPlaylist";
import SelectPlaylist from "./components/SelectPlaylist";
import { getPlaylists } from './Request';
import { ItemINT } from "./types/playlist-type";

const App: FC = (): ReactElement => {
  const [playlists, setPlaylists] = useState<ItemINT[]>([]);

  useEffect(() => {
    const fetchDataAndSetPlaylists = async () => {
      try {
        const data = await getPlaylists();
        setPlaylists(data.items);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDataAndSetPlaylists();
  }, []);

  console.log("added");
  
  const memoizedSearchtrack = useMemo(() => <Searchtrack setPlaylists={setPlaylists} />, [setPlaylists]);
  const memoizedAddNewPlaylist = useMemo(() => <AddNewPlaylist />, []);
  const memoizedSelectPlaylist = useMemo(() => <SelectPlaylist playlists={playlists} />, [playlists]);

  return (
    <Box sx={{ p: "5%", height: "100%", display: "flex", gap: "40px", flexDirection: "column" }}>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", pb: "5%"}}>
        {memoizedSearchtrack}
        {memoizedAddNewPlaylist}
      </Box>
      {memoizedSelectPlaylist}
    </Box>
  );
};

export default App;
