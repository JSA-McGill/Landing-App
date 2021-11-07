import React, { useState } from "react";
import PropTypes from 'prop-types';


import Grid from "@material-ui/core/Grid"
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

export default function LearningJapanese() {

    return (
        <div className="exchangeinjapan">
            Learning Japanese
        </div>
    );
}

LearningJapanese.propTypes = {
    classes: PropTypes.object.isRequired,
};

