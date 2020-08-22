import React from 'react'
import { makeStyles, withStyles, Avatar, Grid } from "@material-ui/core";
import logo from '../assets/university.png'

// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '250px',
        height: '100%',
        backgroundColor: '#253053',
        textAlign: 'center',

    },

    large: {
        height: '200px',
        width: '200px',
        



    },

    labelColor: {
        color: '#fff',
        fontWeight: '200px'

    }
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu}>
            <Grid container
                alignItems="center">
                <Grid item>
                    <Avatar alt="Remy Sharp" src={logo} className={classes.large} />
                    <label className={classes.labelColor}>University</label>
                </Grid>
            </Grid>


        </div>
    )
}

export default withStyles(style)(SideMenu);
