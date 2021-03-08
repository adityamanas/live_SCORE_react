import { AppBar,IconButton,Toolbar,Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const Mycard = () =>{
    return (
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" color="secondary" aria-label="menu">
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" >
            live SCORE
            </Typography>
             </Toolbar>
        </AppBar>
    );
};

export default Mycard;