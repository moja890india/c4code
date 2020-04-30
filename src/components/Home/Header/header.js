import React, { Component } from 'react';
import './header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class Header extends Component {
    state={
        showDrawer:false
    }
    useStyles = makeStyles((theme) => ({
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
    //handling drawer
    handleDrawer=()=>{
        this.setState({showDrawer:true})
    }


    render() {
        const classes = this.useStyles

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <div className='row navigation_margin' >
                            <div className='col d-flex align-items-center'>
                                <IconButton edge="start" 
                                className={classes.menuButton} 
                                color="inherit" 
                                aria-label="menu"
                                onClick={this.handleDrawer}
                                >
                                    <MenuIcon />
                                </IconButton>
                                {this.state.showDrawer === true?<div>drawer side bar</div>:null}
                                <div className='col d-flex align-items-center'>
                                    <Typography variant="h6" className={classes.title}>
                                        C4code
                                </Typography>
                                </div>
                                <div className='col d-flex justify-content-end align-items-center'>
                                    <Button color="inherit">Login</Button>
                                </div>
                            </div>
                        
                        

                        </div>
                        {/* 

                        <div style={{ a: 'right' }} >

                        </div> */}

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
