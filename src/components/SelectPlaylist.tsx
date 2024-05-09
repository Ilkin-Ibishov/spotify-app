import React, { FC, useState, useEffect } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { PlaylistsList } from "../types/playlist-type";
import TracksTable from "./TracksTable";

const SelectPlaylist: FC<PlaylistsList> = ({ playlists }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<string>('');
  const [selectedPlaylistDescription, setSelectedPlaylistDescription] = useState<string>('');
  const [selectedPlaylistId, setSelectedPlaylistId] = useState<string>('');
  console.log("change", selectedPlaylistId);
  
  useEffect(() => {
    if(localStorage.getItem("selectedPlaylistId") !== selectedPlaylistId){
      return
    }
    else if (playlists && playlists.length > 0) {
      setSelectedPlaylist(playlists[0].name || '');
      setSelectedPlaylistDescription(playlists[0]?.description || '');
      setSelectedPlaylistId(playlists[0].id || '')
    }
  }, [playlists]);
  
  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setSelectedPlaylist(selectedValue);
    const selectedPlaylist = playlists.find(playlist => playlist.name === selectedValue);
    if (selectedPlaylist) {
      setSelectedPlaylistDescription(selectedPlaylist.description);
      setSelectedPlaylistId(selectedPlaylist.id)
      console.log(selectedPlaylist);
      
    }
  };
  localStorage.setItem("selectedPlaylistId",selectedPlaylistId)
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "5%" }}>
        <FormControl sx={{ width: "30%" }}>
          <InputLabel id="demo-simple-select-label">Select playlist</InputLabel>
          <Select
            value={selectedPlaylist}
            label="Select playlist"
            onChange={handleChange}
          >
            {playlists && playlists.map((playlist) => (
              <MenuItem key={playlist.id} value={playlist.name}>
                {playlist.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <span>{selectedPlaylistDescription}</span>
      </Box>
      <TracksTable selectedPlaylistId={selectedPlaylistId} playlists={playlists} />
    </Box>
  );
};

export default SelectPlaylist;
