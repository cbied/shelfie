import React from 'react'
import { Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard'
import Form from './Form'

export default (
    <Switch>
        <Route component={Dashboard} path='/' exact />
        <Route component={Form} path='/form' />
    </Switch>
)