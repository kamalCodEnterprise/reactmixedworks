import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import SendIcon from '@material-ui/icons/Send';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { fontSize } from '@mui/system';
import { styled } from '@mui/material/styles';

import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';



import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const Cardcom1 = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
  return (
    <div><Card sx={{ maxWidth: 345 }}>
    <CardHeader style={{ fontSize: '12px' }}
  avatar={
    <Avatar sx={{ bgcolor:'red' }} aria-label="recipe">
      R
    </Avatar>
    
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  
  title= { <Typography sx={{ fontSize:'12px',textAlign:'left' }}>Shrimp and Chorizo Paella </Typography>}
  subheader={ <Typography sx={{ fontSize:'12px',textAlign:'left' }}>September 14, 2016</Typography>}
/>

<CardMedia
  component="img"
  height="194"
  image="https://media.gettyimages.com/photos/faisal-mosque-at-sunset-islamabad-picture-id611734156?s=2048x2048"
  alt="Paella dish"
/>

<CardContent>
  <Typography variant="body2" color="text.secondary">
    This impressive paella is a perfect party dish and a fun meal to cook
    together with your guests. Add 1 cup of frozen peas along with the mussels,
    if you like.
  </Typography>
</CardContent>

<CardActions disableSpacing>
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
  <ExpandMore
    expand={expanded}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </ExpandMore>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
    <Typography paragraph>Method:</Typography>
    <Typography paragraph>
      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
      aside for 10 minutes.
    </Typography>
    <Typography paragraph>
      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
      large plate and set aside, leaving chicken and chorizo in the pan. Add
      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
      stirring often until thickened and fragrant, about 10 minutes. Add
      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
    </Typography>
    <Typography paragraph>
      Add rice and stir very gently to distribute. Top with artichokes and
      peppers, and cook without stirring, until most of the liquid is absorbed,
      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
      mussels, tucking them down into the rice, and cook again without
      stirring, until mussels have opened and rice is just tender, 5 to 7
      minutes more. (Discard any mussels that don’t open.)
    </Typography>
    <Typography>
      Set aside off of the heat to let rest for 10 minutes, and then serve.
    </Typography>
  </CardContent>
</Collapse>
    </Card></div>
  )
}

export default Cardcom1