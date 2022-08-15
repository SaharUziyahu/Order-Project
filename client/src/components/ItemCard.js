import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Item({ oneItem, addToCart, cart }) {
  return (
      <Card sx={{ maxWidth: 345 , height:580 , marginTop:3, position:'relative'}} onClick={() => addToCart(oneItem)}>
      <CardMedia
        component="img"
        height="140"
        image={oneItem.imageUrl}
        alt={oneItem.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {oneItem.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {oneItem.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {oneItem.isGlutenFree ? <span> gluten free</span> : null}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {oneItem.isVegeterian ? <span> Ⓥ</span> : <></>}
        </Typography>
        <Typography variant="body2" color="secondary">
         ${oneItem.price}
        </Typography>
      </CardContent>
      <CardActions sx={{position:'absolute',bottom:0}}>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default Item;
