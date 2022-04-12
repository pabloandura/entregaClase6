import { Grid } from "@mui/material";
import Item from "./Item";
const ItemList = ({data}) => {

    return (
        <Grid container spacing={2}>  
            {
                data.length > 0
                ? data.map(info => <Item key={info.key} id={info.id} name={info.name} stock={info.stock} cost={info.cost} image={info.image}/>)
                : <p>Cargando...</p>
            }
        </Grid>

    );  
}

export default ItemList;