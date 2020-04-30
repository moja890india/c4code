import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Login from './components/Login/login'


class Routes extends Component {
    state = {

    }

    render() {
        //  console.log(this.props)

        return (
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Login} />


                </Switch>

        )
    }
}

export default Routes;