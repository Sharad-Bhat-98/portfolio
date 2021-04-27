import {useState ,useEffect} from 'react';
import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import  IconButton  from '@material-ui/core/IconButton';
import MenuIcon  from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
   
    },
  }));

  function ElevationScroll(props) {
    const { children, window } = props;

    
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };


  const NavBar = (props) => {
    const classes = useStyles();

    const [view,setView]=useState({
      mobileView:false,
      drawerOpen:false
    })
    const { mobileView  ,drawerOpen} = view;

    useEffect(()=>{
      const setResponsiveness=()=>{
        return window.innerWidth <900 
        ?setView( ({...view,mobileView:true}))
        :setView( ({...view,mobileView:false}))
      }
      setResponsiveness();
      window.addEventListener('resize',()=>setResponsiveness())
     
    },[])

    const dispDesktop=()=>{
      return (    <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Portfolio
        </Typography>

        <a href='#home' style={{color:'inherit',textDecoration:'none'}}> <Button color='inherit' className={classes.menuButton} disableElevation>Home</Button></a>
        <a href='#about' style={{color:'inherit',textDecoration:'none'}}> <Button color='inherit' className={classes.menuButton} disableElevation>About</Button></a>
        <a href='#skills' style={{color:'inherit',textDecoration:'none'}}><Button color='inherit' className={classes.menuButton} disableElevation>Skill</Button></a>
        <a href='#projects' style={{color:'inherit',textDecoration:'none'}}> <Button color='inherit' className={classes.menuButton} disableElevation>Project</Button></a>
       <a href='#contact' style={{color:'inherit',textDecoration:'none'}}> <Button color='inherit' className={classes.menuButton} disableElevation>Contact</Button></a>
        
        </Toolbar>)
    }

    const dispMobile=()=>{
      const handleDrawerOpen=()=>{
        setView( ({...view, drawerOpen: true}))
      }
      const handleDrawerClose=()=>{
        setView( ({...view, drawerOpen: false}))
      }
      return ( <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <b>Portfolio</b>
          </Typography>
          <IconButton
          {...{
            edge: "end",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick:handleDrawerOpen
          }}
        >
          <MenuIcon />

        </IconButton>
        <Drawer 
        {...{
          anchor:'top',
          open: drawerOpen,
          onClick:handleDrawerClose
        }}
        >
          <div >
         <ListItem button >
         <a href='#home' style={{color:'inherit',textDecoration:'none'}}><ListItemText primary={'HOME'}/> </a><Divider/>
         </ListItem>
         <ListItem button >
         <a href='#about' style={{color:'inherit',textDecoration:'none'}}><ListItemText primary={'ABOUT'}/></a>
         </ListItem>
         <ListItem button>
         <a href='#skills' style={{color:'inherit',textDecoration:'none'}}><ListItemText primary={'SKILLS'}/></a>
         </ListItem>
         <ListItem button>
         <a href='#projects' style={{color:'inherit',textDecoration:'none'}}><ListItemText primary={'PROJECTS'}/></a>
         </ListItem>
         <ListItem button>
         <a href='#contact' style={{color:'inherit',textDecoration:'none'}}>  <ListItemText primary={'CONTACT'}/></a>
         </ListItem>
          </div>

        </Drawer>
          </Toolbar>)
          

    }
      return (  
        <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
        <AppBar  >
         {mobileView ?  dispMobile() : dispDesktop()}
        </AppBar>
        </ElevationScroll>
        </React.Fragment>
       );
  }
   
  export default NavBar;