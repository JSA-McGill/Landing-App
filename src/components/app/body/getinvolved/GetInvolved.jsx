import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        width: '100vw'
    },
    getinvolved: {
        justifyContent: 'center',
        textAlign: 'left',
        padding: '24px'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: theme.spacing(2)
    },
    email: {
        width: '50vw',
        margin: theme.spacing(1)
    },
    mainmessage: {
        width: '50vw',
        margin: theme.spacing(1)
    },
    send: {
        width: 200,
        margin: theme.spacing(1)
    }
  }));

export default function GetInvolved(){
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <div className={classes.content}>
                <div className={classes.getinvolved}>
                    <h1> Get Involved </h1> 
                    <p> JSA McGill is always looking for participants and volunteer through our local events! If you're interested you can find a list of our events here <a href="https://www.facebook.com/pg/jsa.mcgill/events/?ref=page_internal" target="_blank"> here </a>!</p>
                </div>
                <div>
                    <h1>Reach Out to Us!</h1>
                    <form className={classes.form} noValidate autoComplete="off" action="#">
                        <TextField 
                            classes={{root: classes.email}}
                            color="secondary"
                            label="Your Email Address" 

                        />
                        <TextField
                            classes={{root: classes.mainmessage}}
                            label="Your Message" 
                            placeholder="Type your message here!"
                            multiline
                            color="secondary"
                            rows={10}
                            rowsMax={10}
                        />
                        <Button classes={{root: classes.send}} color="secondary" variant="outlined" raised={false}>
                            Send
                        </Button>
                    </form>
                </div>
                <div>
                    
                    <IconButton color="primary">
                        <a href="https://www.facebook.com/jsa.mcgill" target="_blank">
                            <FacebookIcon />
                        </a>
                    </IconButton>
                    <IconButton color="primary">
                        <a href="https://www.instagram.com/jsamcgill/?hl=en" target="_blank">
                            <InstagramIcon />
                        </a>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

