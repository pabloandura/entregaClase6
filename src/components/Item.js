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
    <Grid  item xs={3} >
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} component="div">
          Stock: {props.stock}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: {props.cost}
        </Typography>
        <Typography variant="body2">
          <img src={props.image} alt={props.name}/>
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={'/item/'+props.id}>
          <Button size="small" variant='outlined'
            sx={{width:'100%'}}>
            + Informacion
          </Button>        
        </Link>
      </CardActions>
    </Card>
    </Grid>
  );
}

export default Item;