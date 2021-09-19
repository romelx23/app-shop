import React from 'react';
import { DropDown } from '../DropDown/DropDown';
import './NavBar.css';
import cart_shop from '../../assets/icons/shopping-bag.svg';
import clean from '../../assets/icons/cleaning.svg';
import vegetables from '../../assets/icons/bananas.svg';
import shoping from '../../assets/icons/shopping.svg';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="navbar__container">
            <h2 className="logo"><Link to="/">Logo</Link></h2>
            <div className="content__dropdown">
                <div className="dropdown">
                    <button className="dropbtn">Categorias</button>
                    <li className="navbar__categories">
                        <ul>Verduras <img src={clean} alt="categorias" /> </ul>
                        <ul>Limpieza <img src={vegetables} alt="categorias" /> </ul>
                        <ul>Abarrotes <img src={shoping} alt="categorias" /> </ul>
                    </li>
                </div>
            </div>
            <input className="navbar__search" type="search" name="" id="" placeholder="Haga su busqueda..." />
            <div className="features">
                <h4>
                    <img src={cart_shop} alt="cart_shop" />
                    Cart
                </h4>
                <DropDown />
            </div>
        </div>
    )
}
