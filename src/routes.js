import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home'

export default (
    <Switch>
        <Route component={Home} path='/' exact />
    </Switch>
)