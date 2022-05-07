import * as React from 'react';
import { FormControl, Dialog, InputLabel, Input, FormHelperText, Button} from '@mui/material/';
import './FormDialog.css';

const FormDialog = ({handleClose, open, checkout}) => {
  const [nameF, setNameF] = React.useState(null)
  const [emailF, setEmailF] = React.useState(null)
  const [numberF, setNumberF] = React.useState(null)
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
          <div onClick={handleClose} className='closeIcon'> x </div> 
          <div className='textoForm' >Ingrese la siguiente informacion para terminar su compra.</div>
          <div className='cajaForm'>
              <FormControl>
                  <InputLabel htmlFor="name">Nombre</InputLabel>
                  <Input required onChange={(event) => {
                    setNameF(event.target.value);
                  }} id="name" aria-describedby="name-helper-text" />
                  <FormHelperText id="name-helper-text">Nombre Preferido</FormHelperText>  
              </FormControl>
              <FormControl>
                  <InputLabel htmlFor="email">Direccion Email</InputLabel>
                  <Input required onChange={(event) => {
                    setEmailF(event.target.value);
                  }} id="email" aria-describedby="email-helper-text" />
                  <FormHelperText id="email-helper-text">ej.: jose@gmail.com</FormHelperText>   
              </FormControl>
              <FormControl>
                  <InputLabel htmlFor="telefono">Telefono</InputLabel>
                  <Input required onChange={(event) => {
                    setNumberF(event.target.value);
                  }} id="telefono" aria-describedby="phone-helper-text" />
                  <FormHelperText id="phone-helper-text">Solo Números</FormHelperText>   
              </FormControl>
              <Button onClick={() => {
                checkout(nameF, emailF, numberF);
                handleClose();
              }}>
                Finalizar!
              </Button>
          </div>
      </Dialog>
    </div>
  );
}

export default FormDialog;