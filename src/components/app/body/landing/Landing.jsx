import React, { useState } from "react";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import landing from "../../../../assets/landing/landing.js"

import { makeStyles } from '@material-ui/core/styles'

import "./landing.scss";
import events from "../../../../assets/images/Welcome Party/IMG_0573.JPG"
import background from "../../../../assets/images/smash_tourny.jpg"
import fam from "../../../../assets/images/fam.jpg"

import LandingBackground from "../../../../assets/svg/background.svg";
import VizSensor from 'react-visibility-sensor';

import {
    Link
} from 'react-router-dom'

import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles( (theme) => ({
    root: {
        
    },
    execs: {
        flexGrow: 1,
        width: "100vw"
      },
    media: {
      height: 300,
    },
    button: {
        width: 200,
        margin: theme.spacing(1)
    }
  }));  

export default function Landing() {
    const classes = useStyles();
    const history = useHistory();

    let [active, setActive] = useState(false);

    return (
        <div>
            <div container className="landing">
               
                <div className="landing-section">
                    <div className="landing-placeholder">
                    </div>
                    <Fade in={true} timeout={1500}> 
                        <div className="landing-box">
                            <img className="landing-background-image" src={LandingBackground} />
                        </div>
                    </Fade>
                    <Fade in={true} timeout={2500}> 
                        <Typography color="secondary"> 
                            <h1 className="landing-main-text"> 
                                    JSA McGill
                            </h1>
                            <Button classes={{root: classes.button}} onClick={() => {
                                    history.push('/about');
                            }} color="secondary" variant="outlined" raised={false}>
                                Learn More
                            </Button>
                        </Typography>
                    </Fade>
                </div>
                
                <Slide direction="right" timeout={300} in={true}>
                    <div className="landing-section-image-only">
                        <Grid className={classes.execs} container justify="center" alignItems="center" wrap>
                        {landing.data.map((data, index) => (
                            <Grid item xs={8} sm={6} md={4} lg={2} xl={2}>
                            <Card >
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.media} 
                                        image={data.image}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            ))}
                        </Grid>
                    </div>
                </Slide>
                {/* <div className="landing-section">
                        <Slide direction="right" timeout={1200} in={true}>
                            <div className="landing-box">
                                <Fade in={true} timeout={2000}> 
                                    <img className="landing-main-image" src={background}/>    
                                </Fade>
                            </div>
                        </Slide>
                       
                </div> */}
                <div className="landing-ending">
                    <div className="landing-ending-item">
                        <Fade in={true} timeout={1500}> 
                        <Typography color="secondary"> 
                                <h1 className="landing-main-subtext"> 
                                    Check out our events for fun!
                                </h1>
                            </Typography>
                        </Fade>
                    </div>
                    <div className="landing-ending-item">
                        <Button classes={{root: classes.button}} onClick={() => {
                                history.push('/events')
                        }} color="secondary" variant="outlined" raised={false}>
                                Events
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
