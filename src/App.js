import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Badges from './pages/Badges/Badges';
import NewBadge from './pages/NewBadge/NewBadge';
import Layout from './layouts/Layout';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={NewBadge} />
                    <Route exact path="/" component={Home} />
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
