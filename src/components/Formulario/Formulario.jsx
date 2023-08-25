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
  let nome = '';
  return (
    <form className='form'>


      {/* <DateTimePicker label="readOnly" readOnly /> */}
      <TextField
        onChange={(event) => { console.log(event) }}
        id='Paciente'
        label='Paciente'
        variant='outlined'
        fullWidth margin='normal'
      />
      <TextField
        id='Visitante'
        label='Visitante'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='cpf'
        label='CPF'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        id='Leito'
        label='Leito'
        variant='outlined'
        fullWidth
        margin='normal'
      />


      <FormControl className='form__control'>
        <FormLabel>O visitante será? </FormLabel>
        <FormGroup defaultChecked >
          <FormControlLabel control={
            <Switch name='Diurno' />
          }
            label='Diurno'
          />

          <FormControlLabel control={
            <Switch name='Noturno' />
          }
            label='Noturno'
          />
          <FormLabel>ou permanecerá como:</FormLabel>

          <FormControlLabel control={
            <Switch name='Acompanhante' />
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