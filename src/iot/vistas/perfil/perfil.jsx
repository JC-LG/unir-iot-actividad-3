import Navegacion from "../../componentes/navegacion/navegacion.jsx";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';
import Face2Icon from '@mui/icons-material/Face2';
import AddReactionIcon from '@mui/icons-material/AddReaction';

function Perfil() {

    return (
        <>
            <Navegacion/>
            <Box sx={{p: 1}}>
                <h1>Perfil</h1>
                <Box sx={{height: 100, width: '100%'}}>
                    <p>Crea un nuevo contacto:</p>
                    <Stack direction="row" spacing={1}>
                        <Chip icon={<AddReactionIcon />} label="Agregar a UNIR IoT" />
                    </Stack>
                </Box>
                <Box sx={{height: 400, width: '100%'}}>
                    <p>Comparte este perfil de acceso con:</p>
                    <Stack direction="row" spacing={1}>
                        <Chip icon={<FaceIcon />} label="Jose" />
                        <Chip icon={<Face2Icon />} label="Maria" variant="outlined" />
                    </Stack>
                </Box>
            </Box>
        </>
    )
}

export default Perfil
