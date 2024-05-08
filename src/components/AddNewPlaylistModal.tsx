import React, { FC, ReactElement, forwardRef, ForwardRefRenderFunction } from "react";
import { Box, Typography, TextField } from "@mui/material";

interface Props {}

const AddNewPlaylistModal: ForwardRefRenderFunction<HTMLDialogElement, Props> = ({}, ref) => {
  return (
    <dialog ref={ref}>
      <Box sx={{height: "300px", width: "600px", p: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Add new playlist
      </Typography>
      <TextField sx={{width: "100%"}} id="outlined-basic" label="Playlist name" variant="outlined" />
      </Box>
    </dialog>
  );
};

export default forwardRef(AddNewPlaylistModal);
