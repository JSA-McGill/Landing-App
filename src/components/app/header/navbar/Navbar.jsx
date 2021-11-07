import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom'

import media_queries from '../../../../mixins/media_queries';
import { useMedia } from 'react-media';

import logo from "../../../../assets/images/logo512.png";

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useLocation } from 'react-router-dom'

import "./navbar.scss"

export default function Navbar(props) {

    const links = {
    "Home": "/", 
    "About":"/about", 
    "Events": "/events",
    "Resources": "/resources",
    // "Blog": "/blog",
    "Get Involved": "/getinvolved"
    };

    // Tabs
    const [value, setValue] = useState(0);

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                setValue(0);
                break;
            case "/about":
                setValue(1);
                break;
            case "/events":
                setValue(2);
                break;
            case "/resources":
                setValue(3);
                break;
            case "/getinvolved":
                setValue(4);
                break;
            default:
               setValue(0); 
        }
    });

    const handleChange = (event, value) => {
        setValue(value);
    }

    const matches = useMedia({ queries: media_queries });
    
    const showList = matches.small ? true : false;

    const handleFontChange = (value, text) => {
        if (value === true) {
            return (<div classes="navbar_tab--on">{text}</div>);
        } else {
            return (<div classes="navbar_tab">{text}</div>);
        }
    }
    
    // Drawer
    const [drawerOn, setDrawer] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setDrawer(open);
    };

    const anchor="right"

    const location = useLocation();

    return (
        <div className="navbar">
            <AppBar className="navbar_appbar" elevation={0} color="inherit">
                {showList ? (
                    <div>
                        <div className="navbar_appbar_menubar">
                            <div className="navbar_appbar_container_logo">
                                    <img className="navbar_appbar_logo" alt="Logo" src={logo} />
                            </div>
                            <IconButton color="secondary" aria-controls="simple-menu" aria-label="menu" onClick={toggleDrawer(true)}>
                               <MenuIcon/>
                            </IconButton>
                        </div>
                        <Drawer anchor={anchor} open={drawerOn} onClose={toggleDrawer(false)}>
                            <div
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    { Object.entries(links).map(([k, v], link) => {
                                        console.log(k);
                                        console.log(v);
                                        return (
                                        <ListItem disableRipple button key={k}>
                                             <Link to={v}>
                                                <ListItemText primary={k}/>
                                            </Link>
                                        </ListItem>
                                        );
                                        })}
                                </List>
                                </div>
                        </Drawer>
                    </div>
                ) :
                (
                    <div className="navbar_appbar_tabs_container">
                        <Link to="/">
                            <div className="navbar_appbar_container_logo">
                                <img onClick={() => setValue(0)} className="navbar_appbar_logo" alt="Logo" src={logo} />
                            </div>
                        </Link>
                        <div className="nav_bar_tabs_divider"> </div>
                        <Tabs
                            classes={ value === 0 ? 
                                {root: "navbar_appbar_tabs"} 
                            : {}}
                            variant="scrollable"
                            scrollButtons="auto"
                            indicatorColor="primary"
                            textColor="secondary"
                            value={value}
                            onChange={handleChange}
                            TabIndicatorProps={value === 0 ? {   
                                style: {
                                    display: "none",
                                },
                            } : {style: {}}
                            }
                        >   
                            <Tab disabled indicator={{color:'transparent', backgroundColor: 'transparent'}} />
                            <Tab  disableRipple label={handleFontChange(value === 1, "About")}  to="/about" component={Link}/>
                            <Tab  disableRipple label={handleFontChange(value === 2, "Events")} component={Link} to="/events"/>
                            <Tab  disableRipple label={handleFontChange(value === 3, "Resources")} component={Link} to="/Resources"/>
                            <Tab  disableRipple label={handleFontChange(value === 4, "Get Involved")} component={Link} to="/getinvolved"/>
                            {/* <Tab  disableRipple label={handleFontChange(value === 4, "Blog")} component={Link} to="/blog"/> */} 
                            {/* CHANGE TO 5 later */}
                        </Tabs>
                    </div>
                )}
            </AppBar>
        </div>
    );
};
