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

import "./resources.scss"

const useStyles = makeStyles((theme) => ({
    divider: {
        // Theme Color, or use css color in quote
        backgroundColor: "red",
        height: 1,
        width: "80vw"
    },
}));


export default function Resources() {
    const classes = useStyles();
    
    return (
        <div className="resources">
            <ExchangeInJapan/>
            <Divider classes={{root: classes.divider}} />
            <WorkingInJapan/>
            <Divider classes={{root: classes.divider}} />
            Learning Japanese
            <Divider classes={{root: classes.divider}} />
            Japanese Cultural Activites in Montreal
        </div>
    );
}

Resources.propTypes = {
    classes: PropTypes.object.isRequired,
};

