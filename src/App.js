import './App.css';
import Formulario from './components/Formulario/Formulario';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant='h3' align='center'>Registro de Visitas</Typography >
      <Formulario />
    </Container>
  );
}

export default App;
