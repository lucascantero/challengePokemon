import React from 'react';
import './i18n/index'
import { Route, Switch} from 'react-router-dom';
import Home from './containers/home/Home.jsx';
import Pokemon from './containers/pokemon/Pokemon.jsx'
import Error404 from './containers/Error404/Error404.jsx'

const App = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/pokemon/:id" component={Pokemon}/>
            <Route exact path="*" component={Error404}/>
        </Switch>
    )
}

export default App;