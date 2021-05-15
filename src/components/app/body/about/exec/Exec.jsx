import React, { useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';

import Doge from "../../../../../assets/svg/doge.svg";
import Neko from "../../../../../assets/svg/neko.svg";
import Shiba from "../../../../../assets/svg/shiba.svg";
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        height: 400
    },
    media: {
      height: 300,
      width: 'auto',
    },
    focusedMedia: {
        height: 0,
        width: 'auto',
    },
    image: {
        height: 300,
        width: '100%',
        objectFit: 'cover'
    },
    actionarea: { 
        display: 'block',
        height: '100%',
        width: '100%'
    },
    imageBlock: {
        height: 300,
        width: '100%',
        backgroundColor: 'black'
    },
    content: {
        display: 'inline-block',
        height: '100%',
        width: '100%'
    },
    flexObject: {
        display: 'flex',
        flex: 1
    },
    textObject: {
        display: 'flex',
        alignItems: 'stretch',
        marginRight: '5px'
    }
  }));
  

export default function Exec(props) {
    const classes = useStyles();

    const [focused, setFocused] = useState(false);

    return (
        <Grid item xs={8} sm={6} md={4} lg={2} xl={2}>
            <Card className={classes.root} variant="outlined" >
                <CardActionArea classes={{root: classes.actionarea}} onClick={() => setFocused(!focused)} >
                    <CardMedia
                        classes={{
                            root: !focused ? classes.media : classes.focusedMedia,
                            img: classes.image
                        }}
                        image={props.Image}
                    >
                    </CardMedia>
                    <CardContent classes={{root: classes.content}} >
                            <Typography classes={{root: classes.flexObject}} gutterBottom variant="h5" component="h2" display="inline" style={{fontSize: 20, fontWeight: 'bold'}} >
                                {props.FirstName+" "+props.LastName}  
                            </Typography>
                            { !focused ? 
                                <>
                                    <Typography classes={{root: classes.flexObject}} gutterBottom variant="h6" component="h3">
                                        {props.Title}
                                    </Typography>
                                </>
                                :
                                <>
                                    <Typography classes={{root: classes.flexObject}} gutterBottom variant="h6" component="h5" style={{fontStyle:"italic"}}>
                                        {props.Program}
                                    </Typography>

                                    <Typography classes={{root: classes.flexObject}} gutterBottom variant="h6" component="h3">
                                        {props.FavoriteFood}
                                    </Typography>

                                    <Typography classes={{root: classes.flexObject}} gutterBottom variant="h6" component="h3">
                                        {props.Pet}
                                    </Typography>
                                    
                                    <Typography classes={{root: classes.flexObject}} gutterBottom display="inline" component="div">
                                        <Icon classes={{root : classes.textObject}}>
                                            <InstagramIcon/>
                                        </Icon>
                                        <span classes={classes.textObject}>
                                            {props.Instagram}
                                        </span>
                                    </Typography>
                                </>
                            }
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};