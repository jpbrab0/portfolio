import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/projects" component={Projects}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes