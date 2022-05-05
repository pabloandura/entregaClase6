import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = (props) => {



  return (
    <Grid  item xs={6} md={4} lg={3} >
    <Card sx={{ minWidth: 275 , minHeight: 400, display:'cover', backgroundImage:`url(${props.image})`, backgroundRepeat:'no-repeat' }}>
      <CardContent sx={{
        background: 'linear-gradient(173deg, lightblue 0%, rgba(255,255,255,1) 100%)', 
        opacity:'80%',
        textAlign:'start',
        display: 'flex',
        alignItems: 'flex-end',
        flexWrap: 'wrap'
        }}>
        <Typography variant="h6" sx={{ margin:'5px', width:'100%'}} gutterBottom>
          {props.name}
        </Typography>
        <div>
          <Typography sx={{ margin:'5px', fontSize: 14 , width:'100%'}}>
            Stock: {props.stock}
          </Typography>
          <Typography sx={{ margin:'5px' , width:'100%' }}>
            Price: {props.cost}
          </Typography>
        </div>
          <CardActions sx={{
            width:'100%'
          }}>
            <Link to={'/item/'+props.id}>
              <Button size="small" variant='outlined'>
                Detalles
              </Button>        
            </Link>
          </CardActions>
      </CardContent>
    </Card>
    </Grid>
  );
}

export default Item;