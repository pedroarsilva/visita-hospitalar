import Rodape from './components/Rodape';
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario/Formulario';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Banner />

      <Container component="article" maxWidth="sm">
        <Typography variant='h3' align='center'>Registro de Visitas</Typography >
        <Formulario />
      </Container>
        <Rodape />
    </div>
  );
}

export default App;
