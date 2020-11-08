import React from "react";
import Index from "pages/index";
import About from "pages/about";
import Work from "pages/work";
import Team from "pages/team";
import Contact from "pages/contact";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/work' component={Work}/>
			<Route exact path='/team' component={Team}/>
			<Route exact path='/contact' component={Contact}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
