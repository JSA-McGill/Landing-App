import React, { useState } from "react";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

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
import VizSensor from 'react-visibility-sensor';

import {
    Link
} from 'react-router-dom'

import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
    root: {
        
    },
    execs: {
        flexGrow: 1,
        width: "100vw"
      },
    media: {
      height: 300,
    },
  });  

export default function Landing() {
    const classes = useStyles();

    let [active, setActive] = useState(false);

    return (
        <div>
            <div container className="landing">
               
                    <div className="landing-section">
                        <Slide direction="right" timeout={1200} in={true}>
                            <div className="landing-box">
                            <Fade in={true} timeout={2000}> 
                                <img className="landing-main-image" src={fam}/>    
                                </Fade>
                            </div>
                        </Slide>
                         <Fade in={true} timeout={1500}> 
                            <h1 className="landing-main-text"> 
                                JSA McGill
                            </h1>
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
                <VizSensor onChange={(isVisible) => {
                        setActive(isVisible);
                    }}
                    >
                <div className="landing-section">
                        <Slide direction="left" timeout={1200} in={active}>
                            <div className="landing-box">
                                <Fade in={active} timeout={2000}> 
                                    <img className="landing-main-image" src={background}/>    
                                </Fade>
                            </div>
                        </Slide>
                        <Fade in={active} timeout={1500}> 
                                <h1 className="landing-main-text"> 
                                Come join us for some fun!
                                </h1>
                        </Fade>
                </div>
                </VizSensor>
            </div>
        </div>
    );
}
