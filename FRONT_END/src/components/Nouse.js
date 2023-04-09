import * as React from "react";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
// import "./Nav.css";

const style = {
  position: 'absolute',   
  top: '50%',
  left: '50%',
  color:'white',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#283a46',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Nouse({ open,handleCloseD }) {
  return (
    <Modal open={open} onClose={handleCloseD}>
      <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Records?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete these record(s)?
          </Typography>
          <br/>
          <Stack spacing={1} direction="row">
        <Button variant="outlined" sx={{color:'white',width:200,borderColor:'white'}}
        onClick={() => handleCloseD(true)}>
          Delete</Button>
        <Button variant="outlined" sx={{color:'white',width:200,borderColor:'white'}}
         onClick={() => handleCloseD(false)}>Cancel</Button>
        </Stack>
        </Box>
   </Modal>
  );
}