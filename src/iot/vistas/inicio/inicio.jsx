import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightIcon from '@mui/icons-material/Light';

import Navegacion from "../../componentes/navegacion/navegacion.jsx";
import Box from "@mui/material/Box";


function Inicio() {

    const [selecionado, actualizarSeleccion] = React.useState(['bluetooth']);

    const cambiarCofiguracion = (value) => () => {
        const indice = selecionado.indexOf(value);
        const selecion = [...selecionado];

        if (indice === -1) {
            selecion.push(value);
        } else {
            selecion.splice(indice, 1);
        }

        actualizarSeleccion(selecion);
    };

    return (
        <>
            <Navegacion/>
            <Box sx={{ p : 1 }}>
                <h1>Inicio</h1>
                <List
                    sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                    subheader={<ListSubheader>Modulo</ListSubheader>}
                >
                    <ListItem>
                        <ListItemIcon>
                            <BluetoothIcon/>
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth"/>
                        <Switch
                            edge="end"
                            onChange={cambiarCofiguracion('bluetooth')}
                            checked={selecionado.indexOf('bluetooth') !== -1}
                            inputProps={{
                                'aria-labelledby': 'switch-list-label-bluetooth',
                            }}
                        />
                    </ListItem>
                </List>

                <List
                    sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                    subheader={<ListSubheader>Dispositivos Activos</ListSubheader>}
                >
                    <ListItem>
                        <ListItemIcon>
                            <LightbulbIcon/>
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-bluetooth" primary="Lampara: Comedor"/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LightIcon/>
                        </ListItemIcon>
                        <ListItemText id="switch-list-label-bluetooth" primary="Camara: Sala"/>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default Inicio
