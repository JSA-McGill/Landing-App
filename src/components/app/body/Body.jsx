import React from 'react';
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
import ScrollToTop from "../../../hooks/ScrollToTop";

//  React Router

export default function Body (){
    return (
        <div className="body">
            <ScrollToTop>
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
                    
                    {/* <Route exact path="/resources">
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
            </ScrollToTop>
        </div>
    );
}