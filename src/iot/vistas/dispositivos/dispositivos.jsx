import * as React from "react";
import Navegacion from "../../componentes/navegacion/navegacion.jsx";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import LightbulbIcon from "@mui/icons-material/Lightbulb.js";
import ListItemText from "@mui/material/ListItemText";
import LightIcon from "@mui/icons-material/Light.js";
import GarageIcon from '@mui/icons-material/Garage';
import Switch from "@mui/material/Switch";

function Dispositivos() {

    const [selecionado, actualizarSeleccion] = React.useState(['camara']);

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
            <Box sx={{p: 1}}>
                <h1>Dispositivos</h1>
                <Box sx={{height: 400, width: '100%'}}>
                    <List
                        sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
                        subheader={<ListSubheader>Dispositivos Disponibles</ListSubheader>}
                    >
                        <ListItem>
                            <ListItemIcon>
                                <LightbulbIcon/>
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-bluetooth" primary="Lampara: Comedor"/>
                            <Switch
                                edge="end"
                                onChange={cambiarCofiguracion('lampara')}
                                checked={selecionado.indexOf('lampara') !== -1}
                                inputProps={{
                                    'aria-labelledby': 'switch-list-label-lampara',
                                }}
                            />

                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LightIcon/>
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-bluetooth" primary="Camara: Sala"/>
                            <Switch
                                edge="end"
                                onChange={cambiarCofiguracion('camara')}
                                checked={selecionado.indexOf('camara') !== -1}
                                inputProps={{
                                    'aria-labelledby': 'switch-list-label-camara',
                                }}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <GarageIcon/>
                            </ListItemIcon>
                            <ListItemText id="switch-list-label-bluetooth" primary="Puerta: Cochera"/>
                            <Switch
                                edge="end"
                                onChange={cambiarCofiguracion('puerta')}
                                checked={selecionado.indexOf('puerta') !== -1}
                                inputProps={{
                                    'aria-labelledby': 'switch-list-label-puerta',
                                }}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </>
    )
}

export default Dispositivos
