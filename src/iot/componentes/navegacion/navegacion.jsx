import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import './navegacion.css'
import {useNavigate} from "react-router-dom";


import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

const Navegacion = () => {

    const [mostrar, actualizarMostar] = useState(false)

    const navegar = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon onClick={() => {
                        actualizarMostar(true)
                    }} />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    IOT - UNIR
                </Typography>
            </Toolbar>
            {mostrar && (
                <Drawer
                    classes={{paper: 'menu'}}
                    open={mostrar}
                    onClose={() => {
                        actualizarMostar(false)
                    }}
                >
                    <h2 style={{paddingLeft: '10px', backgroundColor: 'black', color: 'white'}}>Menu</h2>
                    {['Inicio', 'Dispositivos', 'Perfil'].map((texto, index) => (
                        <ListItem key={texto} disablePadding>
                            <ListItemButton onClick={() => {
                                navegar(`/${texto.toLowerCase()}`);
                            }}>
                                <ListItemIcon>
                                    {index === 0 ? <DeviceHubIcon /> : <DevicesOtherIcon />}
                                </ListItemIcon>
                                <ListItemText primary={texto} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Drawer>
            )}
        </AppBar>
    );
};

export default Navegacion