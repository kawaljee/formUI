import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import {Link ,withRouter } from 'react-router-dom';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',

    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#333996" };
    } else {
        return { color: "#6e6e6e" };
    }
};

function Header({history}) {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems="center">
                    <Grid item>
                        {/* <InputBase
                            placeholder="Search topics"
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                        /> */}
                         <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Student Registration
                </Link>

                    </Grid>
                    <Grid item>
                        {/* <InputBase
                            placeholder="Search topics"
                            className={classes.searchInput}
                            startAdornment={<SearchIcon fontSize="small" />}
                        /> */}
                         <Link
                    className="nav-link"
                    style={isActive(history, "/view-students")}
                    to="/view-students"
                >
                    View Students 
                </Link>

                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        {/* <IconButton>
                            <Badge badgeContent={2} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small" />
                        </IconButton> */}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default withRouter(Header);