import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";



import './acceso.css'
import Navegacion from "../../componentes/navegacion/navegacion.jsx";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
};

function Acceso() {

    const navegar = useNavigate();

    return (
      <>
          <Navegacion />
          <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={true}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{
                  backdrop: {
                      timeout: 500,
                  },
              }}
          >
              <Fade in={true}>
                  <Box sx={style} className='modal'>
                      <Typography id="transition-modal-title" variant="h5" component="h2" sx={{textAlign: 'center'}}>
                          IOT - UNIR
                      </Typography>
                      <TextField sx={{width:'100%'}} id="usuario" label="Usuario" variant="standard" />
                      <TextField sx={{width:'100%'}} id="contrasenia" label="Contraseña" variant="standard" />
                      <br />
                      <Button onClick={() => {
                          navegar('inicio')
                      }} sx={{marginTop: 3, marginX: '33%' }} variant="contained">INGRESAR</Button>
                  </Box>
              </Fade>
          </Modal>
      </>
  )
}

export default Acceso
