import React, { FC, FunctionComponentElement, ReactElement } from "react";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { createPlaylist } from "../Request";

const AddNewPlaylist: FC<any> = ({fetchDataAndSetPlaylists}): ReactElement => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const creating = await createPlaylist(formJson.playlistName, formJson.playlistDescription)
    console.log(creating.id);
    localStorage.setItem("selectedPlaylistId",creating.id)
    handleClose();
    fetchDataAndSetPlaylists()
  }
    return (
        <>
            <Button onClick={handleClickOpen} sx={{textWrap: "nowrap",  backgroundColor: "white", color: "black", height:"3em"}} variant="contained">Add new playlist</Button>
            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                PaperProps={{
                component: 'form',
                onSubmit: handleSubmit
                }}
      >
        <DialogTitle variant="h4">Add new playlist</DialogTitle>
        <DialogContent sx={{display: "flex", gap: "30px", flexDirection: "column"}}>
            <TextField sx={{width: "100%"}} name="playlistName" id="outlined-basic" label="Playlist name" variant="outlined" />
            <TextField multiline rows={4} sx={{width: "100%"}} name="playlistDescription" id="outlined-basic" label="Playlist description" variant="outlined" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="contained">Create</Button>
        </DialogActions>
      </Dialog>
        </>
    );
};

export default AddNewPlaylist;
