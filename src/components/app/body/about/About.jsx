import React, { useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Exec from './exec/Exec'
import "./about.scss"
import execs from "../../../../assets/execs/execs.js"

import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: 0
    },
  }));

export default function About(){
    const classes = useStyles()

    return (
        <Slide in={true} direction="left" timeout={300} >
            <div className="about">
            <Fade in={true} timeout={1200}>
                <div className="content">
                        <div>
                            <h1> The Club</h1>
                            <p> JSA McGill is a rapidly-growing social/cultural organization whose goals are to promote Japanese culture and language in the local community through various events hosted throughout the school year.</p>
                            <p> We are a very diverse group of students and although some of our members are indeed Japanese, there are many non-Japanese members as well. Even though we have varying backgrounds, we all have a common interest in Japanese culture! </p> 

                            <h2> Our Mission: </h2>
                            <ul>
                                <li> Raise awareness of traditional and modern Japanese culture. </li> 
                                <li> Create opportunities for both Japanese and non-Japanese students to practice and learn the language. </li> 
                                <li> Aid students in finding opportunities to work or intern at Japanese companies or global companies based in Japan. </li> 
                                <li> Raise funds for charities in Japan that support the well-being of the country e.g. the Tohoku relief. </li> 
                                <li> Provide students with opportunities for socializing and involvement, through social events and volunteering, from which friendships and community are built. </li> 
                                <li> Create a local Japanese community and Japanese Alumni network for the purpose of sharing information and resources. </li> 
                            </ul>
                        </div>
                    <h1> Our Execs </h1>
                    <div className={classes.root}>
                        <Grid container className={execs} justify="center" spacing={1} alignItems="center" wrap>
                            {execs.data.map((exec, index) => (
                                <Exec
                                    key={exec.id}
                                    Image={exec.Image}
                                    FirstName={exec.FirstName}
                                    LastName={exec.LastName}
                                    Title={exec.Title}
                                    Program={exec.Program}
                                    FavoriteFood={exec.FavoriteFood}
                                    Pet={exec.Pet}
                                    Instagram={exec.Instagram}
                                >
                                </Exec>
                            ))}
                        </Grid>
                    </div>
                
                </div>
                </Fade>
            </div>
        </Slide>
    );
}

