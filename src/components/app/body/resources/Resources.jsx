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
import Divider from '@material-ui/core/Divider';

import ExchangeInJapan from "./exchange/ExchangeInJapan";
import WorkingInJapan from "./working/WorkingInJapan";
import LearningJapanese from "./learning/LearningJapanese";
import CulturalActivities from "./activities/CulturalActivities";

import "./resources.scss"

const useStyles = makeStyles((theme) => ({
    divider: {
        // Theme Color, or use css color in quote
        backgroundColor: "red",
        height: 1,
        width: "80vw"
    },
    category: {
        display: 'flex',
        width: "100vw",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryBorder: {
        borderColor: 'red',
        borderWidth: '2px',
    }
}));


export default function Resources() {
    const classes = useStyles();
    
    const createCategory = (title, background) => {
        return (
            <div className={classes.category}>
                {title}
            </div>
        )
    }

    return (
        <div className="resources">
            <Fade in={true} timeout={1500}>
                {createCategory("Exchange in Japan")}
            </Fade>
            <Divider classes={{root: classes.divider}} />
            <Fade in={true} timeout={2000}>
                {createCategory("Working in Japan")}
            </Fade>
            <Divider classes={{root: classes.divider}} />
            <Fade in={true} timeout={2500}>
                {createCategory("Learning Japanese")}
            </Fade>
            <Divider classes={{root: classes.divider}} />
            <Fade in={true} timeout={3000}>
                {createCategory("Japanese Cultural Activites in Montreal")}
            </Fade>
        </div>
    );
}

Resources.propTypes = {
    classes: PropTypes.object.isRequired,
};

