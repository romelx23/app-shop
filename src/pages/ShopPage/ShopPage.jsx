import React from 'react';
import { Carts } from '../../components/Carts/Carts';
import { NavBar } from '../../components/NavBar/NavBar';
import './ShopPage.css'

export const ShopPage = () => {
    return (
        <div className="container__shop">
            <NavBar />
            <div className="container__page">
                <h2>Shop Page</h2>
                <Carts />
            </div>
        </div>
    )
}
