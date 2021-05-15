import React from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
} from 'react-router-dom'

import Landing from './landing/Landing';
import Blog from "./blog/Blog";
import GetInvolved from "./getinvolved/GetInvolved";
import About from './about/About';
import Events from './events/Events';
import Resources from "./resources/Resources";

//  React Router

export default function Body (){
    return (
        <div className="body">
            <Switch>
                <Route exact path="/">
                    <Landing/>
                </Route>
                <Route exact path="/events">
                    <Events/>
                </Route>

                <Route exact path="/about">
                    <About/>
                </Route>
                {/* 
                <Route exact path="/resources">
                    <Resources/>
                </Route> */}
{/*                 
                <Route exact path="/blog">
                    <Blog/>
                </Route> */}
                
                <Route exact path="/getinvolved">
                    <GetInvolved/>
                </Route>
            </Switch>
        </div>
    );
}

Body.propTypes = {
    classes: PropTypes.object.isRequired,
};