import React, { useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import events from "../../../../assets/events/events.js";
import { CardActionArea } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "NotoSans",
        minHeight: "95vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        marginBottom: "20px",
        color: "black"
    },
    image: {
        width: "90vw",
        height: "50vh"
    }
}));

export default function Events() {
    const classes = useStyles();
    

    const createEvent = (title, description, image, link) => {
        return (
            <Fade in={true} timeout={1000}>
                <Grid item>
                    <Card raised="true" className="">
                        <CardActionArea onClick={() => {
                                window.location.href = link;
                            }
                            } >
                            <CardMedia
                                classes={{root: classes.image}}
                                image={process.env.PUBLIC_URL + image}
                                title={title}
                            />
                            <div className="">
                                
                                <CardContent >
                                    <Typography component="h5" variant="h5">
                                        {title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {description}
                                    </Typography>
                                </CardContent>
                            </div>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Fade>
        )
    }

    const CreateUpcomingEvents = () => {
        return ((events.upcoming.length === undefined || events.upcoming.length === 0) 
        ?
            (
                <Fade in={true} timeout={1000}>
                    <Grid container justify="center"  direction="row" spacing="4">
                        <Grid item>
                            <div className="">
                                <CardContent>
                                    <Typography component="h5" variant="h5">
                                        There are no upcoming events planned
                                    </Typography>
                                </CardContent>
                            </div>
                        </Grid>
                    </Grid>
                </Fade>
            )
            :
            (
                <Slide direction="left" timeout={500} in={true} >
                    <Grid container justify="center"  direction="row" spacing="4">
                        {events.upcoming.map((event, index) => (
                            createEvent(event.Title, event.Description, event.Image, event.Facebook)
                        ))
                        }
                    </Grid>
                </Slide>
            )
            )
    }

    const CreatePastEvents = () => {
        return ((events.past.length === undefined || events.past.length === 0) 
        ?
            (
                <Grid container justify="center"  direction="row" spacing="4">
                    <Grid item>
                        <div className="">
                            <CardContent>
                                <Typography component="h5" variant="h5">
                                    There are no pasts events listed
                                </Typography>
                            </CardContent>
                        </div>
                    </Grid>
                </Grid>
            )
            :
            (
                <Slide direction="left" timeout={500} in={true} >
                    <Grid container justify="center"  direction="row" spacing="4">
                        {events.past.map((event, index) => (
                            createEvent(event.Title, event.Description, event.Image, event.Facebook)
                        ))
                        }
                    </Grid>
                </Slide>
            )
            )
    }

    return (
            <div className={ classes.root}>
                <Slide direction="left" timeout={300} in={true}  >
                    <h2>
                        Upcoming Events
                    </h2>
                </Slide> 
                {
                    CreateUpcomingEvents()
                }   
                <Slide direction="left" timeout={300} in={true}  >
                    <h2>
                        Past Events
                    </h2>
                </Slide>
                {
                    CreatePastEvents()
                }
            </div>
        
    );
}

