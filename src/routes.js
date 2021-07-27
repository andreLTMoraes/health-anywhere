import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import SignIn from './pages/signIn/signIn'
import Home from './pages/home/home' 

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={SignIn} />
                <Route path='/home' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}