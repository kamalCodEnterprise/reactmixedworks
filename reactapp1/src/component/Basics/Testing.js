import React, { useEffect, useState } from 'react';
import {  Link } from "react-router-dom";

import Cardcom1 from './Cardcom1';

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
import Layout from './Layout';





const useStyles = makeStyles({
  btn:{
    fontSize:'60px !important ',
    backgroundColor:'red !important',
    '&:hover':{

      backgroundColor:'yellow !important',
      color:'blue'
    }
  },
  field:{
    backgroundColor:'#cdefc5',
    borderRadius:5
  },
  font12px:{
    fontSize:'12px !important'
  }
})






    function Testing() {
     

      
      const [notes,setNotes] = useState([])
      // useEffect(()=>{

      //   fetch('http://localhost:3000/notes')
      //   .then(res => res.json())
      //   .then(data => setNotes(data)
      //     )
      // },[])
      const [title,  setTitle]= useState('');
      const handle =(e)=>{
e.preventDefault();
if(title){
console.log(title,category)
setTitle(title,category)

}
      }

      const [category,setCategory] = useState('male');
      const classes = useStyles()

        const getdata = () => {
            const datalist = localStorage.getItem("mydata");
            if (datalist) {
                return JSON.parse(datalist);
            } else {
                return [];
            }
        };



        const [inputVal, setInputVal] = useState("");
        const [item4, setItem4] = useState(getdata());
        const [isedit, setIsedit] = useState("");
        const [togglebtn, setTogglebtn] = useState(false);
        const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };





        useEffect(() => {
            localStorage.setItem("mydata", JSON.stringify(item4));

        }, [item4]);

        const addfun = () => {

            if (inputVal == "") {
                alert("dg");
            }
            else if (inputVal && togglebtn) {
                setItem4(
                    item4.map((curel2) => {
                        if (curel2.id === isedit) {

                            return { ...curel2, name: inputVal };

                        }
                        return curel2;
                    })
                );
                setInputVal("");
                setIsedit();
                setTogglebtn(false);
            }

            else {
                const updatval = {
                    id: new Date().getTime().toString(),
                    name: inputVal
                };
                setItem4([...item4, updatval]);
                setInputVal("");

            }
        };

        const delefun = (index) => {
            const filtervdata = item4.filter((ele2) => {
                return ele2.id !== index;
            });
            setItem4(filtervdata);
        };

        // delet all data
        const deleteall = () => {

            setItem4([]);
        };

        // 
        // edit function
        const editfunc = (index) => {
            const editfid = item4.find(
                (cureditele) => {
                    return cureditele.id === index;
                }
            );
            setInputVal(editfid.name);
            setIsedit(index);
            setTogglebtn(true);


        };



        // 
        return (
            <Container sx={{maxWidth:'1180px !important'}}>
            <AppBar position="static">
          
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >  
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

                <div>
                    <input type="text" placeholder='name' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                    {togglebtn ? <span onClick={addfun}>Edit</span> : <span onClick={addfun}>add</span>}


                </div>


                {item4.map((ele) => {
                    return <div key={ele.id}>
                        <h3>{ele.name}</h3>
                        <span onClick={() => editfunc(ele.id)} style={{cursor:"pointer"}}> Edit </span>
                        <span onClick={() => delefun(ele.id)} style={{cursor:"pointer"}}>delete</span>
                    </div>;

                })}


                <button onClick={deleteall}>Cler all</button>
                <p></p>
               
                <form autoComplete="off" onSubmit={handle} >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" required onChange={(e)=>setTitle(e.target.value)}/>
                <Button className={classes.btn} type="submit" color="success" size="small" endIcon={ <SendIcon/>} >Hello World</Button>
                <FormControl className={classes.field}>
      <FormLabel id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={category} onChange={(e)=> setCategory(e.target.value)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="man" control={<Radio />} label="man" />
        
      </RadioGroup>
    </FormControl>
                </form>
                <Grid container spacing={2} mt={3}>
        <Grid item md={3} xs={12} sm={6} >
          <Paper>
            <Cardcom1/>
            </Paper>
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
        <Paper> <Cardcom1/></Paper>
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
        <Paper> <Cardcom1/></Paper>
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
        <Paper> <Cardcom1/></Paper>
        </Grid>
      </Grid>
<Layout/>
            </Container>
        );
    }

export default Testing;

