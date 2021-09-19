import React from 'react';
import './DropDown.css';
import user from '../../assets/icons/user.svg';
import {
    Link
} from "react-router-dom";

export const DropDown = () => {
    return (
        <>
            <div className="dropdown__menu">
                <button className="dropbtn__menu">
                    <img src={user} alt="user" />
                    <h3>User</h3>
                </button>
                    <ul className="dropdown__menu__items">
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/historial">Historial</Link>
                        </li>
                        <li>
                            <Link to="/postear_producto">Subir Producto</Link>
                        </li>
                    </ul>
            </div>
        </>
    )
}
