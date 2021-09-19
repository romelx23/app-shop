import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { DetailsPage } from '../pages/DetailsPage/DetailsPage';
import { HistorialPage } from '../pages/HistorialPage/HistorialPage';
import { Login } from '../pages/Login/Login';
import { ShopPage } from '../pages/ShopPage/ShopPage';
import { UploadProduct } from '../pages/UploadProductPage/UploadProduct';

export const DashBoardRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path="/" component={ShopPage} />
                <Route exact={true} path="/login" component={Login} />
                <Route exact={true} path="/historial" component={HistorialPage} />
                <Route exact={true} path="/postear_producto" component={UploadProduct} />
                <Route exact={true} path="/producto/:id" component={DetailsPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
