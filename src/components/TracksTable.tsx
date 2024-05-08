import { FC, ReactElement } from "react";
import { Box } from "@mui/material";


const TracksTable: FC = (): ReactElement => {
    const PlaylistTracks = [
        {
            image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSC5dHXTqKJqX5YeHlzNtNAXWv2owk3fLLBtUOl_CBvnhBLEZiavi1KVYa-Q-6WSpzxVtgbOVZDdXJqi9M",
            trackName: "Perfect",
            artistName: "Ed Sheeran",
            albumName: "Just Album",
            releaseDate: "01-02-2022",
            id: "001"
        },
        {
            image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcSC5dHXTqKJqX5YeHlzNtNAXWv2owk3fLLBtUOl_CBvnhBLEZiavi1KVYa-Q-6WSpzxVtgbOVZDdXJqi9M",
            trackName: "Perfect",
            artistName: "Ed Sheeran",
            albumName: "Just Album",
            releaseDate: "01-02-2022",
            id: "002"
        }
    ]
  
    return (
      <Box sx={{display: "flex", flexDirection: "column", gap: "30px"}}>
        {PlaylistTracks.map((track)=>(
            <Box key={track.id} sx={{width: "80%" ,display: "flex", flexDirection: "row", gap: "10%", alignItems: "center"}}>
                <img src={track.image} alt="" width={'40px'} height={'50px'} />
                <div>
                    <Box>{track.trackName}</Box>
                    <Box>{track.artistName}</Box>
                </div>
                <Box>{track.albumName}</Box>
                <Box>{track.releaseDate}</Box>
            </Box>
        ))}
      </Box>
    );
  };
  
  export default TracksTable;