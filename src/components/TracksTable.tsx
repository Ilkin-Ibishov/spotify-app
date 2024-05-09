import { FC, ReactElement, useEffect, useState } from "react";
import { Box, Skeleton } from "@mui/material";
import { getPlaylistTracks } from "../Request";
import { PlaylistsINT, PlaylistTrack, ItemINT } from "../types/playlist-type";

interface TracksTableProps {
    selectedPlaylistId: string;
    playlists: ItemINT[];
  }
const TracksTable: FC<TracksTableProps> = ({ selectedPlaylistId, playlists }): ReactElement => {
    const [selectedPlaylistTracks, setSelectedPlaylistTracks] = useState<PlaylistTrack[]>([{
            image: <Skeleton variant="rectangular" width={40} height={50} />,
            trackName: <Skeleton  width={60} variant="text" sx={{ fontSize: '1rem' }} />,
            artistName: <Skeleton width={60} variant="text" sx={{ fontSize: '1rem' }} />,
            albumName: <Skeleton width={60} variant="text" sx={{ fontSize: '1rem' }} />,
            releaseDate: <Skeleton width={60} variant="text" sx={{ fontSize: '1rem' }} />,
            id: ""
    }]);
    useEffect(() => {
        const fetchDataAndSetPlaylists = async () => {
          await setSelectedPlaylistTracks([])
          const data:PlaylistsINT = await getPlaylistTracks(selectedPlaylistId)
          try {
            if(data){
                setSelectedPlaylistTracks(data.items.map((item)=>(
                    {
                        image: item.track.album.images[0].url,
                        trackName: item.track.name,
                        artistName: item.track.artists[0].name,
                        albumName: item.track.album.name,
                        releaseDate: item.track.album.release_date,
                        id: item.track.id
                    }
                )))
            }
            console.log(data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchDataAndSetPlaylists();
      }, [playlists, selectedPlaylistId]);
    console.log("selectedPlaylistTracks", selectedPlaylistTracks);
    console.log("ggg");
    return (
      <Box sx={{display: "flex", flexDirection: "column", gap: "30px"}}>
        {selectedPlaylistTracks && selectedPlaylistTracks.map((track)=>(
            <Box key={track.id} sx={{width: "80%" ,display: "flex", flexDirection: "row", gap: "10%", alignItems: "center"}}>
                {typeof track.image === 'string'
                    ?<img src={track.image} alt="" width={'40px'} height={'50px'} />
                    :<Box>{track.image}</Box>
                }
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