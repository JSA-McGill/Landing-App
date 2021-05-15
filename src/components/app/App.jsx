import React from 'react';
import PropTypes from 'prop-types';

import {
    BrowserRouter as Router,
      Switch,
      Route,
} from 'react-router-dom'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import RED from '@material-ui/core/colors/red';

import Header from './header/Header';
import Body from './body/Body';

import "./app.scss"

 const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          borderRadius: '5em',
        }, 
      }, 
    }, 
    typography: {
      fontFamily: [
        'M_PLUS_1p',
        'NotoSans'
      ].join(','),
    },
    palette: {
        primary: {
          main: RED[50],
          light: RED[700],
          contrastText: RED[700],
        },
        secondary: {
          main: RED[700],
        },
      },
  });
  

export default function App () {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div className={"app"} >
                    <Header/>
                    <Body/>
                </div>
            </Router>
        </ThemeProvider>
    );
}

App.theme = theme;

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

