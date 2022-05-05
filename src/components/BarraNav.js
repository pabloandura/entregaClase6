import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './BarraNav.css'
import CartWidget from './CartWidget';

const BarraNav = () => {

  return (
    <AppBar position="static">
      <Toolbar variant="dense" className='toolbar'>
        <Link to='/' className='linkBarra logo'>
          <Typography variant="h3" color="white" component="div">
          Sonido Acutec
          </Typography>
        </Link>
        <Link to='/category/0' className='linkBarra'>
          <Typography variant="h6" color="white" component="div">
            Preamplificadores
          </Typography>
        </Link>
        <Link to='/category/1' className='linkBarra'>
          <Typography variant="h6" color="white" component="div">
            Compresores
          </Typography>
        </Link>
        <Link to='/category/2' className='linkBarra'>
          <Typography variant="h6" color="white" component="div">
            Equalizadores
          </Typography>
        </Link>
        <Link to='/category/3' className='linkBarra'>
          <Typography variant="h6" color="white" component="div">
            Utilitarios
          </Typography>
        </Link>
          <CartWidget/>
      </Toolbar>
    </AppBar>  
)}

export default BarraNav; 