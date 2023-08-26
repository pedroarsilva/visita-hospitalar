import React, { useState } from 'react';
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
function Formulario({aoEnviar}) {
  const [paciente, setPaciente] = useState("");
  const [visitante, setVisitante] = useState("");
  const [cpf, setCpf] = useState("");
  const [leito, setLeito] = useState("");
  const [diurno, setDiurno] = useState(true);
  const [noturno, setNoturno] = useState(true);
  const [acompanhante, setAcompanhante] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

  return (
    <form
      className='form'
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({paciente, visitante, cpf, leito, diurno, noturno, acompanhante})
        setPaciente('');
        setVisitante('');
        setCpf('');
        setLeito('');
        setCpf('');
        setDiurno('');
        setNoturno('');
        setAcompanhante('');
      }}
    >
      {/* <DateTimePicker label="readOnly" readOnly /> */}
      <TextField
        value={paciente}
        onChange={(event) => {
          setPaciente(event.target.value);
        }}
        id='Paciente'
        label='Paciente'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        value={visitante}
        onChange={(event) => {
          setVisitante(event.target.value);
        }}
        id='Visitante'
        label='Visitante'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        onBlur={(event) => {
          setErros({cpf:{valido:false, texto: "CPF precisa ter 11 dígicos!"}})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value)
        }}
        id='CPF'
        label='CPF'
        variant='outlined'
        fullWidth
        margin='normal'
      />
      <TextField
        value={leito}
        onChange={(event) => {
          setLeito(event.target.value)
        }}
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
            <Switch
              checked={diurno}
              onChange={(event) => {
                setDiurno(event.target.checked)
              }}
              name='diurno'
            // defaultChecked={diurno}
            />
          }
            label='Diurno'
          />

          <FormControlLabel control={
            <Switch
              checked={noturno}
              onChange={(event) => {
                setNoturno(event.target.checked)
              }}
              name='noturno'
            />
          }
            label='Noturno'
          />
          <FormLabel>ou permanecerá como:</FormLabel>

          <FormControlLabel control={
            <Switch
              checked={acompanhante}
              onChange={(event) => {
                setAcompanhante(event.target.checked)
              }}
              name='acompanhante'
            />
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