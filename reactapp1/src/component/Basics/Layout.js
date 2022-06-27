import React from 'react';
import {  Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme)=>{
    return{
        drawerPaper:{
            width:'100px',
            backgroundColor:'red !important'
        },
        dreflex:{
            display:'flex',
            justifyContent:'center',
            gap:40
        },
        menutitle:{
            padding:theme.spacing(1)
        }
    }
   
   
})
const Layout = () => {
    const classes= useStyles()
  return (
    <div className={classes.dreflex}>
        <Drawer
        variant='permanent'
        anchor='left'
        className={classes.drawer}
        
        classes={{paper:classes.drawerPaper}}
        >
<Typography className={classes.menutitle}>Home</Typography>
<Link to="/layout">layout</Link>
        <Link to="/testing">Testing</Link>

        </Drawer>
     <div>   
     
        </div>
    
        
        Layout3</div>
  )
}

export default Layout;