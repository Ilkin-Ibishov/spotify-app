import React, { FC, useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography, Box, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { searchTracks, addTracksToPlaylist, getPlaylists } from "../Request";
import { searchResultItems, SeacrhResult, ItemINT } from "../types/playlist-type";

interface SearchtrackProps {
  setPlaylists: React.Dispatch<React.SetStateAction<ItemINT[] | []>>;
}
const Searchtrack: FC<SearchtrackProps> = ({ setPlaylists }) => {
    const [searchResults, setSearchResults] = useState<searchResultItems[] | []>([])
    const [isBlur, setisBlur] = useState(true)
    const inputText = useRef<HTMLInputElement | null>(null);
    const handleSearch =()=>{
      setisBlur(false)
      const fetchDataAndSetTracks = async () => {
        try {
          if((inputText.current as HTMLInputElement).value === ''){
            setSearchResults([])
            return
          }
          const searchData: SeacrhResult = await searchTracks((inputText.current as HTMLInputElement).value);
            setSearchResults(searchData.tracks.items)
            console.log(searchResults);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    fetchDataAndSetTracks();
    }
    const handleAddTrack = async (uri: string) => {
      try {
        const playlistId = localStorage.getItem("selectedPlaylistId");
        await addTracksToPlaylist(playlistId, [uri]);
        const updatedPlaylists = await getPlaylists();
        setPlaylists(updatedPlaylists.items);
        setisBlur(false)
      } catch (error) {
        console.error('Error:', error);
      }
    }
    return (<>
      <Box sx={{ width: "80%", height:"3em"}}>
      <Box sx={{ display: "flex", gap: "20px", width: "100%", height:"3em" }}>
        <TextField
          id="outlined-basic" 
          variant="outlined" 
          sx={{ width: "40%", backgroundColor: "white", color: "black", borderRadius: "10px", height:"3em"}} 
          inputRef={inputText}
          InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}/>
        <Button onClick={handleSearch} sx={{ backgroundColor: "white", color: "black"}} variant="contained">Search</Button>
      </Box>
      {searchResults.length >0 && !isBlur?<Box onBlur={()=>setisBlur(true)} sx={{position: "absolute", backgroundColor: "white", zIndex: 10, border: "solid 1px", borderColor: "black", overflowY: "scroll", height: "300px", width: "29%"}}>
      {searchResults.map((item:searchResultItems, index) => (
          <Paper key={index} elevation={3} sx={{ padding: 0.5, margin: 2, display:'flex', backgroundColor: "white", justifyContent:"space-between", alignItems: "center" }}>
                <Box><img width="40px" height="40px" src={item.album.images[0].url} alt="" /></Box>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Box onClick={()=>handleAddTrack(item.uri)} sx={{cursor:'pointer'}}>Add</Box>
          </Paper>
        ))}
      </Box>:undefined}
      </Box>
      </>
    );
  };
  
  export default Searchtrack;