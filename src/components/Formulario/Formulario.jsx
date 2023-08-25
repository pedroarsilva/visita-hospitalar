import React from 'react';
import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Switch
} from '@mui/material';
// import { DateTimePicker } from '@mui/x-date-pickers';
function Formulario() {
  return (
    <form>
      
      {/* <DateTimePicker label="readOnly" readOnly /> */}
      <TextField id='Paciente' label='Paciente' variant='outlined' fullWidth margin='normal' />
      <TextField id='Visitante' label='Visitante' variant='outlined' fullWidth margin='normal' />
      <TextField id='cpf' label='CPF' variant='outlined' fullWidth margin='normal' />
      <TextField id='Leito' label='Leito' variant='outlined' fullWidth margin='normal' />


      <FormControl>
        <FormLabel>Visitante: </FormLabel>
        <FormGroup defaultChecked >
          <FormControlLabel control={
            <Switch name='Diurno' />
          }
          label='Diurno'
          />

          <FormControlLabel control={
            <Switch name='Noturno'/>
          }
          label='Noturno'
          />

          <FormControlLabel control={
            <Switch name='Acompanhante'/>
          }
          label='Acompanhante'
          />

        </FormGroup>
      <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
      </FormControl>


    </form>
  )
}
export default Formulario