import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import abc from "../icons/abc.jpg"
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from '../../elements/navbarElement'

function Cardlist() {
  return (
      <NavLink to="/detailpage">
    <Card sx={{ maxWidth: 345, borderRadius: "20px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={abc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            A B C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Pada course ini akan mempelajari mengenai huruf A, B, dan C.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Go to course
        </Button>
      </CardActions>
    </Card>
    </NavLink>
  );
}

export default Cardlist
