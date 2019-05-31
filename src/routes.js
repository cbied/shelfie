import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import Dashboard from './Dashboard'
import Form from './Form'

export default (
    <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Dashboard} path='/dashboard' />
        <Route component={Form} path='/form' />
    </Switch>
)